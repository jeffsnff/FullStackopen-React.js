import Content from "./Content.jsx";
import Total from "./Total.jsx";
import Header from "./Header.jsx";

const App = () => {

  const course = 'Half stack application development'; // Header
  const parts = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14}
  ]
  return(
    <>
      <Header course={course} />
      <Content parts={parts}/>
      <Total 
        exercises={[parts[0].exercises, parts[1].exercises, parts[2].exercises]} 
      />
    </>
  )
}

export default App;