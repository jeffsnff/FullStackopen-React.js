import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [ newNote, setNewNote ] = useState('Add a note')

  const addNote =(event) => {
    event.preventDefault();
    const newEntry = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1
    }
    setNotes(notes.concat(newEntry));
    setNewNote('');
  }

  const noteHandleChange = (event) => {
    setNewNote(event.target.value);
  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote} >
        <input
          value={newNote}
          onChange={noteHandleChange} />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default App 