import Header from './Header.jsx';
import Content from './Content.jsx';
import Total from './Total.jsx';

const Course = ({courseName, sections, exerciseTotal}) => {

  return(
    <>
      <Header courseName={courseName} />
      <Content sections={sections} />
      <Total exerciseTotal={exerciseTotal} />
    </>
  );
}

export default Course;