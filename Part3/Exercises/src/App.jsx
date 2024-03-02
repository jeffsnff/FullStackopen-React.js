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
  const [message, setMessage] = useState(null);
  const [messageColor, setMessageColor] = useState(null);

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
          setMessage(`${response.name} has been deleted.`)
          setMessageColor('green')
          setTimeout(() => {
            setMessage(null);
          }, 5000)
        })
    }
    
  }

  // This filters the persons array
  const filteredList = persons.filter( person => person.name.toLocaleLowerCase().includes(filteredName));
 
  return(
    <>
      <Header headerText={'Phonebook'} />
      <Notification 
        message={message}
        color={messageColor}
      />
      <Search filteredName={filteredName} setFilterName={setFilterName} />
      <ContactForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber} 
        message={message}
        setMessage={setMessage}
        setMessageColor={setMessageColor}
      />
      <Contact contactList={filteredList} handleDelete={deleteNumber} />
    </>
  );
}

export default App;