const user = require("express").Router();

//Dummy list of user for now
const Users = {
  Mudassar: "Mudassar@123",
  Tousif: "Tousif@123",
  Praveen: "Hello@123",
  Shivam: "password",
  Admin: "Admin@123",
  User: "User@123"
};

user.get("/", (req, res) => {
  if (!!req.session.User) {
    res.json(req.session.User);
  } else {
    res.status(401).json({
      Error: true,
      Success: false,
      Message: "Not Logged in"
    });
  }
});
user.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!Users[username]) {
    req.session.destroy();
    res.status(404).json({
      Error: true,
      Success: false,
      Message: "User not found!"
    });
  } else if (Users[username] && Users[username] !== password) {
    req.session.destroy();
    res.status(403).json({
      Error: true,
      Success: false,
      Message: "Invalid username and password!"
    });
  } else {
    //Password is right!
    res.json({
      Error: false,
      Success: true,
      Message: {
        Name: username
      }
    });
  }
});
user.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!Users[username]) {
    Users[username] = password;
    res.status(201).json({
      Error: false,
      Success: true,
      Message: `Created user ${username}.`
    });
  } else {
    res.status(409).json({
      Error: true,
      Success: false,
      Message: `User ${username} already exist.`
    });
  }
});

module.exports = user;
