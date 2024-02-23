import { useState, useEffect } from 'react';
import axios from 'axios';

import Note from './components/Note.jsx';
import noteService from './services/notes.js';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [ newNote, setNewNote ] = useState('');
  const [ showAll, setShowAll ] = useState(true);

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  const addNote = (event) => {
    event.preventDefault();
    const newEntry = {
      content: newNote,
      important: Math.random() < 0.5
    }
    noteService
      .create(newEntry)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const noteHandleChange = (event) => {
    setNewNote(event.target.value);
  }

  const toggleImportant = (id) => {
    const note = notes.find((note) => note.id === id);
    const updatedNote = {...note, important: !note.important}
    noteService
      .update(id, updatedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
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