const Person = ({name, number, id, handleDelete}) => {

  return(
    <li>{name}: {number}<button onClick={() => {handleDelete(name,id)}}>Delete</button></li>
  );
}

export default Person;