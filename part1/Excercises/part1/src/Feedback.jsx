import { useState } from 'react';
import Button from './Button.jsx';

const Feedback = () => {

  const[ good, setGood ]= useState(0);

  const handleGood = () => {
    setGood(good+1);
  }
  
  return(
    <>
      <h1>Feedback Page</h1>
      <Button onClickFunction={handleGood} buttonName={'Good'} />
    </>
    
  )
}

export default Feedback;