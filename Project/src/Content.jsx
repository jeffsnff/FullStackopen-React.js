import Part from "./Part.jsx";

const Content = ({sections}) => {
  // let sectionsMapped = sections.map((section) => {
  //   return (
  //     <p key={section.id}>
  //       <Part key={sections.id} name={section.name} exercises={section.exercises} />
  //     </p>
  //   );
  // });

    return(
        <>
          {/* {sectionsMapped} */}
          <Part key={sections.id} name={section.name} exercises={section.exercises} />
        </>
    );
}

export default Content;