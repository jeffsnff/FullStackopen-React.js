import { useState, useEffect } from 'react';
import axios from 'axios';

import Note from './Note.jsx';


const App = () => {
  const [notes, setNotes] = useState([]);
  const [ newNote, setNewNote ] = useState('');
  const [ showAll, setShowAll ] = useState(true);
  const URL = 'http://localhost:3001/notes';

  useEffect(() => {
    console.log('effect');
    axios
      .get(`${URL}`)
      .then(response => {
        console.log('Promise Fullfilled');
        setNotes(response.data);
      })
  }, [])
  console.log('Render: ',notes.length, ' notes' )


  const addNote =(event) => {
    event.preventDefault();
    const newEntry = {
      content: newNote,
      important: Math.random() < 0.5
    }

    axios
      .post(`${URL}`, newEntry)
      .then(response => {
        setNotes(notes.concat(response.data));
      })
    setNewNote('');
  }

  const noteHandleChange = (event) => {
    setNewNote(event.target.value);
  }

  const toggleImportant = (id) => {
    const note = notes.find((note) => note.id === id);
    const updatedNote = {...note, important: !note.important}
    axios
      .put(`${URL}/${id}`, updatedNote)
      .then(response => {
        setNotes(notes.map((note) => note.id !== id ? note : response.data))
      })

  }
  
  const notesToShow = showAll ? notes : notes.filter((note) => {
    return note.important;
  })
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>Show {showAll ? 'Important' : 'All'}</button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} toggleImportant={() => toggleImportant(note.id)} />
          // <li key={note.id}>{note.content}</li>
        )}
      </ul>
      <form onSubmit={addNote} >
        <input
          value={newNote}
          placeholder='Enter a note'
          onChange={noteHandleChange} />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default App 