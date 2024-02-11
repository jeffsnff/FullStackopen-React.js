
const Part = (props) => {
  const { name, exercise, key } = props;
  return(
    <>{name} {exercise}</>
  );
}

export default Part;