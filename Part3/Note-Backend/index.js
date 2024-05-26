require('dotenv').config()
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT;
const Note = require('./models/note.js');
const app = express();
app.use(cors());
app.use(express.json());

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
  Note.findById(request.params.id).then(note => {
    if(note){
      response.json(note);
    }else{
      response.status(404).end();
    }
  });
});

app.post('/api/notes', (request, response) => {
  const body = request.body;
  if(body.content === undefined){
    return response.status(400).json({
      error: "Content Missing"
    });
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  })

  note.save().then(savedNote => {
    response.json(savedNote)
  })

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