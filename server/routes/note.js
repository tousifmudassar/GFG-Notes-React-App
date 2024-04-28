const note = require("express").Router();

//Dummy List of notes for now
const Notes = [
  {
    NoteID: "marty",
    Title: "Marty McFly",
    User: "Mudassar",
    Desc: "Martin Seamus 'Marty' McFly is a fictional character and the protagonist of the Back to the Future franchise. He is a high school student who accidentally becomes a time traveler and alters history after his friend Emmett Brown invents a DeLorean time machine."
  },
  {
    NoteID: "emmet",
    Title: "Emmett 'Doc' Brown",
    User: "Mudassar",
    Desc: "Emmett Lathrop Brown, Ph.D., commonly referred to as 'Doc Brown', is a fictional scientist character in the Back to the Future franchise. In the world of the franchise, he is the inventor of the world's first and second time machines, the first (counting in order of his personal chronology) constructed using a 1981 DeLorean sports car, and the second constructed using a steam engine locomotive."
  },
  {
    NoteID: "biff",
    Title: "Biff Tannen",
    User: "Mudassar",
    Desc: "Biff Howard Tannen is a fictional character and a major antagonist in the Back to the Future trilogy. Thomas F. Wilson plays Biff in all three films as well as the Universal Studios ride, and voiced the character in the animated series. Aidan Cutler played him in the original West End production of the first film's stage musical adaptation, and Nathaniel Hackmann plays him in the Broadway production.[1] Biff is the main antagonist of the first and second films. Biff's great-grandfather, Buford 'Mad Dog' Tannen (also played by Wilson), is the main antagonist of the third."
  },
  {
    NoteID: "jennifer",
    Title: "Jennifer Parker",
    User: "Mudassar",
    Desc: "Jennifer Jane Parker (portrayed by Claudia Wells in the first film and voiced by her in Back to the Future: The Game, Elisabeth Shue in the second and third film, voiced by Cathy Cavadini in the animated series) is dating Marty McFly. In 2015 as seen in Back to the Future Part II, they are married."
  }
];

note.get("/", (req, res) => {
  res.json(Notes);
});

module.exports = note;
