
const Hello = (props) => {
    console.log(props);
    return(
        <div>
            <h1>Hello {props.name}</h1>
            <p>You are {props.age}</p>
        </div>
    )
}

export default Hello;