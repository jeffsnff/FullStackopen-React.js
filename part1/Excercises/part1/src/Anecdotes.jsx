import { useState } from "react";
import Button from './Button.jsx';

const Anecdotes = () => {
  let anecdote = 0;
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [ selected, setSelected ] = useState(anecdote);
  const [ vote, setVote ] = useState(
    {0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0})
  const [ displayVote, setDisplayVote ] = useState(selected)
  const [ displayHighestAnecdote, setDisplayHighestAnecdote ] = useState()
  
  const handleAnecdote = () => {
    const number = Math.floor(Math.random() * 8);
    setSelected(number);
    setDisplayVote(vote[number]);
  }
  const handleVote = () => {
    let copyVote = {...vote};
    copyVote[selected] = copyVote[selected] + 1;
    setVote(copyVote);
    findHighestRating(copyVote)
  }

  const findHighestRating = (object) => {
    const values = Object.values(object);
    // const maxRating = Math.max.apply(Math, values); This was the first one I was able to implement, but I don't FULLY understand it. 
    const maxRating = Math.max(...values); // This one I understand more so I am going with this one.
    
    for(const key in object){
      if(object[key] === maxRating){
        setDisplayHighestAnecdote(anecdotes[key])
      }
    }
  }

  return (
    <>
      <h1>Anecdote of the Day</h1>
      <p>Qoute : {anecdotes[selected]}</p>
      <p>Votes : {displayVote}</p>
      <Button onClickFunction={handleVote} buttonName={'Vote'} />
      <Button onClickFunction={handleAnecdote} buttonName={'New Anecdote'} />
      <h1>Highest Rated Anecdote</h1>
      <p>{displayHighestAnecdote}</p>
    </>
  );
}

export default Anecdotes;