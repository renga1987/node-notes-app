console.log('Starting app');

const fs = require('fs');

const _ = require('lodash');

const yargs = require('yargs');

const notes = require('./notes.js');

var titleOptions = {
  describe:'Title of Note',
  demand:true,
  alias:'t'
};

var bodyOptions = {
  describe:'Body of Note',
  demand:true,
  alias:'b'
};

const argv = yargs.command('add','Add a new Note',{
  title:titleOptions,
  body:bodyOptions
}).command('list','list all options')
  .command('read','read note',{
    title:titleOptions,
  }).command('remove','remove note',{
     title:titleOptions,
  }).help().argv;

//console.log(process.argv);
//console.log(argv);

var command = argv._[0];

//Using Process
//var command = process.argv[2];
//console.log("Command:"+command);

if(command === 'add'){
  var note = notes.addNote(argv.title,argv.body);
  if(note){
    console.log("Notes Created");
    notes.logNote(note);
  }else{
    console.log("Note title taken");
  }
}else if(command === 'list'){
  var allNotes = notes.getAll();
  console.log('Printing: '+ allNotes.length + ' Notes');
  allNotes.forEach((note)=>notes.logNote(note));
}else if(command === 'read'){
  var note = notes.getNote(argv.title);
  if(note){
    console.log("Notes Found");
    notes.logNote(note);
  }else{
    console.log("Note Not found");
  }

}else if(command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not removed';
  console.log(message);
}else{
  console.log("Command Not Received");
}

//fs.appendFile('greetings.txt',"Hello Renga!")
