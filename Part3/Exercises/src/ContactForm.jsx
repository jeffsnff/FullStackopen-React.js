import Input from './Input.jsx';
import Header from './Header.jsx';

const ContactForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  setNewNumber,
  newNumber
  
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