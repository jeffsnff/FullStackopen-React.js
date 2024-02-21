import ReactDOM from 'react-dom/client';
import axios from 'axios';
import App from './App'

const notesArray = axios.get('http://localhost:3001/notes')
  notesArray.then(response => {
    console.log(response.data)
  })

const badpromise = axios.get('http://localhost:3001/foobar')
  console.log(badpromise)

const notes = [
  {
    id: 1,
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
)