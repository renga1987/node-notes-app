
//Example to convert JSON to String
var obj ={
    name:'Renga'
};
var stringObj = JSON.stringify(obj);
//console.log(typeof stringObj);
//console.log(stringObj);

//Example to convert String to JSON
var personString = '{"name":"Renga","age":26}';
var person = JSON.parse(personString);
//console.log(typeof person);
//console.log(person);

const fs = require('fs');
var originalNote ={
  title:'Some Title',
  body:'Some Body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var notesString = fs.readFileSync('notes.json');
var note = JSON.parse(notesString);
console.log(typeof note);
console.log(note);
