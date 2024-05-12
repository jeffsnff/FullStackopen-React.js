const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())
app.use(express.json())


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

app.get('/', (request, response) => {
  response.send('<div><h1>Welcome to my backend</h1><p>Follow the routes below</p><p>${URL}/api/notes</p><p>${URL}/api/notes/:id</p></div>');
});

app.get('/api/notes', (request, response) => {
  response.json(notes);
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