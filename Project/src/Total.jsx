
const Total = ({exerciseTotal}) => {

  let total = 0;
  exerciseTotal.map((section) => {
    total = total + section.numExercises;
  });

    return(
        <>
            <p>Number of exercieses : {total}</p>
        </>
    );
}

export default Total;