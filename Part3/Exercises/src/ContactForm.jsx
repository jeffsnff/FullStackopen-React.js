import Input from './Input.jsx';
import Header from './Header.jsx';
import contactService from './services/contacts.js';

const ContactForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  setNewNumber,
  newNumber,
  message,
  setMessage,
  setMessageColor
  
  }) => {

  const nameHandleChange = (event) => {
    setNewName(event.target.value);
  }
  const numberHandleChange = (event) => {
    setNewNumber(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    // Creates new entry object
    const newEntry = {
      name: newName,
      number: newNumber
    }
    // Looks to see if person is already in the phonebook
    if(persons.find((person) => person.name === newEntry.name)){
      const updateConfirmation = confirm(`${newEntry.name} already exist in the Phonebook, do you want to replace the old phone number with the new one?`);

      if(updateConfirmation){
        const nameToUpdate = persons.find((person) => person.name === newEntry.name)
        newEntry.id = nameToUpdate.id
        contactService
          .updateContact(newEntry, newEntry.id)
          .then(response => {
            contactService
            .getAll()
            .then(updatedContacts => {
              setPersons(updatedContacts)
              console.log(response)
              setMessage(`${response.name} contact information has been updated`)
              setMessageColor('green');
              setTimeout(() => {
                setMessage(null)
              }, 5000)
            })
          })
      }else{
        setNewName('');
        setNewNumber('');
        return;
      }
      
    }else{
      contactService
        .create(newEntry)
        .then(returnedContact => {
          setPersons(persons.concat(returnedContact))
        })
      setNewName('');
      setNewNumber('');
    }
  }

  return(
    <form onSubmit={addPerson}>
        <Header headerText={'Add Contact'} />
        <Input inputType={'Name'} inputValue={newName} onChange={nameHandleChange} />
        <br/>
        <Input inputType={'Number'} inputValue={newNumber} onChange={numberHandleChange} />
        <div>
          <button type="submit">Add Name</button>
        </div>
      </form>
  );
}

export default ContactForm;