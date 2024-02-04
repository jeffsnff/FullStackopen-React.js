import { useState } from 'react';
import Button from './Button.jsx';
import Display from './Display.jsx';
const Feedback = () => {

  const [ good, setGood ] = useState(0);
  const [ bad, setBad ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);

  const handleGood = () => {
    setGood(good+1);
  }
  const handleBad = () => {
    setBad(bad+1);
  }
  function handleNeutral(){
    setNeutral(neutral+1);
  }

  return(
    <>
      <Button onClickFunction={handleGood} buttonName={'Good'} />
      <Button onClickFunction={handleBad} buttonName={'Bad'} />
      <Button onClickFunction={handleNeutral} buttonName={'Neutral'} />
      <Display good={good} bad={bad} neutral={neutral} />
    </>
    
  )
}

export default Feedback;