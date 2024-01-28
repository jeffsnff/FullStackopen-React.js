
const Total = (props) => {
    return(
        <>
            <p>Number of exercieses : {
              props.numberExercises[0].exercises + 
              props.numberExercises[1].exercises + 
              props.numberExercises[2].exercises} 
            </p>
        </>
    );
}

export default Total