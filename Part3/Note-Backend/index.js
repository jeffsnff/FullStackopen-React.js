const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const env = require('dotenv').config()
const PORT = process.env.PORT || 3001;
const password = process.env.PASSWORD;
const app = express();
app.use(cors());
app.use(express.json());
const url = `mongodb+srv://fullstack-notes:${password}@notes-database.julpkqu.mongodb.net/noteApp?retryWrites=true&w=majority`;


mongoose.set('strictQuery', false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Note = mongoose.model('Note', noteSchema);

const generateID = () => {
  const maxID = notes.length > 0 ? Math.max(...notes.map(note => note.id)) : 0;
  return maxID + 1;
}

let notes = [
  {
    id:1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]

// This is the first page that loads. This does NOT get all notes
app.get('/', (request, response) => {
  response.send('<div><h1>Welcome to my backend</h1><p>Follow the routes below</p><p>${URL}/api/notes</p><p>${URL}/api/notes/:id</p></div>');
});

// Grabs all the notes in the database
app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes);
  })
});

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find( note => {
    if(id === note.id){
      return note;
    }
  });
  
  if(note){
    response.json(note);
  }  else {
    
    response.status(404).end()
  }
})

app.post('/api/notes', (request, response) => {
  const body = request.body;
  if(!body.content){
    return response.status(400).json({
      error: "Content Missing"
    });
  }

  const note = {
    content: body.content,
    important: Boolean(body.important) || false,
    id: generateID()
  }

  notes = notes.concat(note);
  response.json(note);

})

app.delete('/app/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter(note => {
    return note.id !== id;
  })

  response.status(204).end()
})

app.listen(PORT);
console.log(`Sever is running on PORT : ${PORT}`);