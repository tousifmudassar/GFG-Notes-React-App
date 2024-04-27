const note = require("express").Router();

//Dummy List of notes for now
const Notes = [
  {
    NoteID: "hello",
    Title: "Hello World",
    Desc: "Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World"
  },
  {
    NoteID: "faq",
    Title: "Frequently Asked Questions",
    Desc: "What questions are you asking frequently"
  },
  {
    NoteID: "gfg",
    Title: "GeeksforGeeks",
    Desc: "Hello GeeksforGeeks"
  },
  {
    NoteID: "mt",
    Title: "Mudassar Tousif",
    Desc: "Hello Mudassar Tousif"
  }
];

note.get("/", (req, res) => {
  res.json(Notes);
});

module.exports = note;
