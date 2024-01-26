
const Hello = () => {
    const friends = [
        {name: 'Paola', age: 29},
        {name: 'Jeff',  age: 34}
    ]

    return(
        <div>
            <p>{friends[0].name} is an amazing woman. She is dating {friends[1].name}</p>
        </div>
    )
}

export default Hello;