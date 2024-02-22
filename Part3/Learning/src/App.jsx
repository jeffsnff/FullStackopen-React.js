import { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {
  const [notes, setNotes] = useState([]);
  const [ newNote, setNewNote ] = useState('Add a note');
  const [ showAll, setShowAll ] = useState(true);

  useEffect(() => {
    console.log('effect');
    axios
      .get('http://localhost:3001/notes')
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
      important: Math.random() < 0.5,
      id: notes.length + 1
    }
    setNotes(notes.concat(newEntry));
    setNewNote('');
  }

  const noteHandleChange = (event) => {
    setNewNote(event.target.value);
  }
  
  const notesToShow = showAll ? notes : notes.filter((note) => {
    note.important;
  })
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>Show {showAll ? 'Important' : 'All'}</button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <li key={note.id}>{note.content}</li>
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