
const Header = (props) => {
  const { courseName } = props.course;
    return(
        <h1>{courseName}</h1>
    );
}

export default Header;