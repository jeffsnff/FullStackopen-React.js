import Content from "./Content.jsx";
import Total from "./Total.jsx";
import Header from "./Header.jsx";

const App = () => {
  const course = {
    courseName : 'Half stack application development',
    sections : [
      {sectionName : 'Fundamentals of React', numExercises : 10},
      {sectionName : 'Using props to pass data', numExercises: 7},
      {sectionName: 'State of a component', numExercises: 14}
    ]
    
  }

  return(
    <>
      <Header course={course} />
      {/* <Content parts={parts}/>
      <Total numberExercises={parts}/> */}
    </>
  )
}

export default App;