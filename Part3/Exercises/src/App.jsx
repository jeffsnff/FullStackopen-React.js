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
  
  function getContacts(){
    contactService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts);
      }) 
  }
  function notificationMessage(message, color){
    setMessage(message)
    setMessageColor(color);

    setTimeout(() => {
      setMessage(null);
    }, 5000)
  }

  function resetForm(){
    setNewName('');
    setNewNumber('');
    return;
  }

  useEffect(() => {
    getContacts()
  },[]);

  const deleteNumber = (name,id) => {
    const deleteConfirmation = confirm(`Are you sure you want to delete${name}?`)
    if(deleteConfirmation){
      contactService
        .deleteContact(id)
        .then(response => {
          getContacts()
          notificationMessage(`${response.name} has been deleted.`, 'green')
        })
        .catch(error => {
          if(error.response.status === 404){
            notificationMessage(`Information of ${name} has already been removed from server.`, 'red')
          }
          getContacts()
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
        notificationMessage={notificationMessage}
        getContacts={getContacts}
        resetForm={resetForm}
      />
      <Contact contactList={filteredList} handleDelete={deleteNumber} />
    </>
  );
}

export default App;