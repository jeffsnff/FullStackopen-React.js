import Part from "./Part.jsx";

const Content = (props) => {
    return(
        <>
          <Part name={props.sections.sections[0].sectionName} exercise={props.sections.sections[0].numExercises}/>
          <Part name={props.sections.sections[1].sectionName} exercise={props.sections.sections[1].numExercises}/>
          <Part name={props.sections.sections[2].sectionName} exercise={props.sections.sections[2].numExercises}/>
        </>
    );
}

export default Content;