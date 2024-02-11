import Part from "./Part.jsx";

const Content = ({sections}) => {

  let sectionsMapped = sections.map((section) => {
    return (
      <p key={section.id}>
        <Part key={sections.id} name={section.sectionName} exercise={section.numExercises} />
      </p>
    );
  });

    return(
        <>
          {sectionsMapped}
        </>
    );
}

export default Content;