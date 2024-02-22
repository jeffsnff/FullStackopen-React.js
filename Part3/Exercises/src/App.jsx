import Header from './Header.jsx';
import Contact from './Contact.jsx';
import ContactForm from './ContactForm.jsx';
import Search from './Search.jsx';

import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filteredName, setFilterName] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/contacts')
      .then(response => {
        setPersons(response.data);
      })
  },[]);

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