import Header from './Header.jsx';
import Contact from './Contact.jsx';
import ContactForm from './ContactForm.jsx';
import Search from './Search.jsx';
import Notification from './Notification.jsx';


import { useState, useEffect } from 'react';
import contactService from './services/contacts.js';


const App = () => {
  
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filteredName, setFilterName] = useState('');
  const [errorMessage, setErrorMessage] = useState('Some Error Here');

  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts);
      })
  },[]);

  const deleteNumber = (name,id) => {
    const deleteConfirmation = confirm(`Are you sure you want to delete${name}?`)
    // console.log(confirmation)
    if(deleteConfirmation){
      contactService
        .deleteContact(id)
        .then(response => {
          contactService
            .getAll()
            .then(updatedContacts => {
              setPersons(updatedContacts)
            })
        })
    }
  }

  // This filters the persons array
  const filteredList = persons.filter( person => person.name.toLocaleLowerCase().includes(filteredName));
 
  return(
    <>
      <Header headerText={'Phonebook'} />
      <Notification message={errorMessage} />
      <Search filteredName={filteredName} setFilterName={setFilterName} />
      <ContactForm persons={persons} setPersons={setPersons} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} />
      <Contact contactList={filteredList} handleDelete={deleteNumber} />
    </>
  );
}

export default App;