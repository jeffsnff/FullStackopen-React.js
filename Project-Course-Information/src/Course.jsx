import Header from './Header.jsx';
import Part from './Part.jsx';
import Total from './Total.jsx';

const Course = ({courseName}) => {

  const MappedOutCourses = courseName.map((course) => {
    let total = 0;
    const mappedOutSections = course.parts.map((section) => {
      total = total + section.exercises;
      return <Part key={section.id} name={section.name} exercise={section.exercises} />;
      
    });
  
    return(
      <div key={course.id}>
        <Header courseName={course.name}  />
        {mappedOutSections}
        <Total total={total} />
      </div>
      
    );
  })

  return(
    <>
      {MappedOutCourses}
    </>
      
  );
}

export default Course;