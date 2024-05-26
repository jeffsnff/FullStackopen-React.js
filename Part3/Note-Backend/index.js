require('dotenv').config()
const express = require('express');
const cors = require('cors');
const Note = require('./models/note.js');
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.static('dist'))
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

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if(error.name === 'CastError'){
    response.status(400).send({ error: 'malformatted id'})
  }
  next(error)
}

app.use(requestLogger)

const unknownEndpoint = (request, response) => {
  response.status(404).send({error: 'unknown endpoint'})
}

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

app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id).then(note => {
    if(note){
      response.json(note);
    }else{
      response.status(404).end();
    }
  })
  .catch(error => {
    next(error)
  })
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

app.put('/api/notes/:id', (request, response, next) => {
  const body = request.body;

  const note = {
    content: body.content,
    important: body.important
  }

  Note.findByIdAndUpdate(request.params.id, note, {new: true})
    .then(updateNote => {
      response.json(updateNote)
    })
    .catch(error => next(error))
})

app.delete('/api/notes/:id', (request, response) => {
  Note.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end();
    })
    .catch(error => next(error));
})


app.use(errorHandler)
app.use(unknownEndpoint)

app.listen(PORT);
console.log(`Sever is running on PORT : ${PORT}`);