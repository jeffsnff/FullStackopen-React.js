import { useState } from 'react';

const App = () => {
  
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ]);
  const [newName, setNewName] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    const newEntry = {
      name: newName
    }

    if(persons.find((person) => person.name === newEntry.name)){
      alert(`${newEntry.name} already exist in the Phonebook.`);
      setNewName('');
      return;
    }else{
      setPersons(persons.concat(newEntry));
      setNewName('');
    }
  }

  const personList = persons.map((person) => {
    return <div key={person.name} >{person.name}</div>
  })
  return(
    <>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Add Name</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {personList}
      </div>
    </>
  );
}

export default App;