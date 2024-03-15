import { useState, useEffect } from 'react';

import Note from './components/Note.jsx';
import noteService from './services/notes.js';
import Notification from './components/Notification.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [ newNote, setNewNote ] = useState('');
  const [ showAll, setShowAll ] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorTitle, setErrorTitle] = useState(null);

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
      .catch(error => {
        setErrorTitle(error.message);
        setErrorMessage(`The note ${note.content} has already been deleted`);
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
      setNotes(notes.filter(note => note.id !== id))
  }
  
  const notesToShow = showAll ? notes : notes.filter((note) => {
    return note.important;
  })
  const displayNote = notesToShow.map(note => 
    <Note key={note.id} note={note} toggleImportant={() => toggleImportant(note.id)} />
  )

  return (
    <div>
      <h1>Notes</h1>
      <Notification title={errorTitle} message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>Show {showAll ? 'Important' : 'All'}</button>
      </div>
      <ul>
        {displayNote}
      </ul>
      <form onSubmit={addNote} >
        <input
          value={newNote}
          placeholder='Enter a note'
          onChange={noteHandleChange} />
        <button type='submit'>Save</button>
      </form>
      <Footer />
    </div>
  )
}

export default App 