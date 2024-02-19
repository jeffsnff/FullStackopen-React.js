import Header from './Header.jsx';

function Contact({ contactList }){
  
  // Takes filtered list and maps over it
  const personList = contactList.map((person) => {
    return <li key={person.id} >{person.name} : {person.number}</li>
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