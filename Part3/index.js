const express = require('express');
const app = express()

app.use(express.json())

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

function generateID(){
  const maxID = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0;
  return maxID + 1
}

app.get('/', (request, response) => {
  response.send('<h1>Backend Server Class</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find(note => {
    return note.id === id
  })
  if(note){
    return response.json(note)
  }else{
    return response.status(404).end()
  }
})

app.post('/api/notes', (request, response) => {
  const body = request.body;

  if(!body.content){
    return response.status(400).json({error: 'content missing'});
  }
  const note = {
    content: body.content,
    important: Boolean(body.important) || false,
    id: generateID(),
  }
  notes = notes.concat(note);
  response.json(note)
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => {
    return note.id !== id
  })
  response.status(204).end()
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on PORT: ${PORT}`)