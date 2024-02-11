import Header from './Header.jsx';
import Content from './Content.jsx';

const Course = ({courseName, sections}) => {
  return(
    <>
      <Header courseName={courseName} />
      <Content sections={sections} />
    </>
  );
}

export default Course;