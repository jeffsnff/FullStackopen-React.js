import { useState } from 'react';

const App = () => {
  
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '3215763465', id: 1}
  ]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const nameHandleChange = (event) => {
    setNewName(event.target.value);
  }
  const numberHandleChange = (event) => {
    setNewNumber(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    const newEntry = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if(persons.find((person) => person.name === newEntry.name)){
      alert(`${newEntry.name} already exist in the Phonebook.`);
      setNewName('');
      setNewNumber('');
      return;
    }else{
      setPersons(persons.concat(newEntry));
      setNewName('');
      setNewNumber('');
    }
  }

  const personList = persons.map((person) => {
    return <div key={person.id} >{person.name} : {person.number}</div>
  })
  return(
    <>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={nameHandleChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={numberHandleChange} />
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