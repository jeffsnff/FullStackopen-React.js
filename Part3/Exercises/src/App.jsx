import Header from './Header.jsx';
import Contact from './Contact.jsx';
import ContactForm from './ContactForm.jsx';
import Search from './Search.jsx';

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

  // This filters the persons array
  const filteredList = persons.filter( person => person.name.toLocaleLowerCase().includes(filteredName));
 
  return(
    <>
      <Header headerText={'Phonebook'} />
      <Search filteredName={filteredName} setFilterName={setFilterName} />
      <ContactForm persons={persons} setPersons={setPersons} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} />
      <Contact contactList={filteredList} />
    </>
  );
}

export default App;