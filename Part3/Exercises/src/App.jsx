import { useState } from 'react';

const App = () => {
  
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '3215763465', id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filteredName, setFilterName] = useState('');

  const nameHandleChange = (event) => {
    setNewName(event.target.value);
  }
  const numberHandleChange = (event) => {
    setNewNumber(event.target.value);
  }
  const searchHandleChange = (event) => {
    setFilterName(event.target.value.toLowerCase());
  }

  const addPerson = (event) => {
    event.preventDefault();
    // Creates new entry object
    const newEntry = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    // Looks to see if person is already in the phonebook
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

  // This filters the persons array
  const filteredList = persons.filter( person => person.name.toLocaleLowerCase().includes(filteredName));

  // Takes filtered list and maps over it
  const personList = filteredList.map((person) => {
    return <div key={person.id} >{person.name} : {person.number}</div>
  })
  
  return(
    <>
      <h1>Phonebook</h1>
      <div>
        Search: <input value={filteredName} onChange={searchHandleChange} /> 
      </div>
      <form onSubmit={addPerson}>
        <h2>Add new contact</h2>
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