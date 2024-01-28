
const Total = (props) => {

  let total = 0;
  props.numExercises.sections.forEach(section => {
    total = total + section.numExercises;
  })
    return(
        <>
            <p>Number of exercieses : {total}</p>
        </>
    );
}

export default Total