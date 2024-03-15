import Header from './Header.jsx';
import Person from './Person.jsx';

function Contact({ contactList, handleDelete }){
  
  // Takes filtered list and maps over it
  const personList = contactList.map((person) => {
    return (
      <Person 
        key={person.id}
        name={person.name}
        number={person.number}
        id={person.id}
        handleDelete={handleDelete}
      />
    )
  })

  return(
    <div>
      <Header headerText={'Contact List'} />
      <ul>
        {personList}
      </ul>
    </div>
    
  );
}

export default Contact;