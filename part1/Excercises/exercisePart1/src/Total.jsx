
const Total = (props) => {
  const [exercise1, exercise2, exercise3] = props.exercises;
    return(
        <>
            <p>Number of exercieses {exercise1 + exercise2 + exercise3} </p>
        </>
    );
}

export default Total