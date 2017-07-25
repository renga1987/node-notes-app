
//To export a function - Sample
module.exports.addNoteSample = () => {
  console.log('addNote renga' );
  return 'New Note';
}

const fs = require('fs');

var fetchNotes = ()=>{
  try{
    var notesString = fs.readFileSync('notes-data.json');
    return notes = JSON.parse(notesString);
  }catch(e){
    return [];
  }
};

var saveNotes = (notes)=>{
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title,body) =>{
  var notes=fetchNotes();
  var note={
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);
  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }

};

var getAll = () =>{
  return fetchNotes();
};

var getNote=(title) =>{
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
}

var removeNote=(title) =>{
  //fetchNotes
  var notes=fetchNotes();
  //filter
  var filteredNotes = notes.filter((note) => note.title !== title);
  //Save notes
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
}

var logNote =(note) => {
    debugger;
    console.log("---");
    console.log("Title:"+note.title);
    console.log("Body:"+note.body);
};

//We can use a object like this for exports.
module.exports ={
  addNote:addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
