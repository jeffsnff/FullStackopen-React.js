
const Hello = ({ name, age }) => {
  const YOB = () => {
    return new Date().getFullYear() - age;
  }

    return(
        <div>
            <p>Hello {name}, you are {age} years old</p>
            <p>I bet you were born in {YOB()}</p>
        </div>
    )
}

export default Hello;