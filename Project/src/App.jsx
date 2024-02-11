import Course from './Course.jsx';
import Total from "./Total.jsx";

const App = () => {
  const course = {
    id: 1,
    courseName : 'Half stack application development',
    sections : [
      {id: 1, sectionName : 'Fundamentals of React', numExercises : 10},
      {id: 2, sectionName : 'Using props to pass data', numExercises: 7},
      {id: 3, sectionName: 'State of a component', numExercises: 14},
      {id: 4, sectionName: 'Refactoring Our Project', numExercises: 5}
    ]
    
  }

  return(
    <>
      <Course courseName={course.courseName} sections={course.sections} exerciseTotal={course.sections} />
    </>
  );
}

export default App;