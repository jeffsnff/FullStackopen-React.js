import { useState } from 'react';
import Button from './Button.jsx';
import Display from './Display.jsx';

const Feedback = () => {

  const [ good, setGood ] = useState(0);
  const [ bad, setBad ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ totalFeedback, setTotalFeedback ] = useState(0);
  const [ positiveFeedback, setPositiveFeedback ] = useState(0);
  const [ average, setAverage ] = useState(0);

  const handleGood = () => {
    setGood(good+1);
    const updatedGood = good+1;
    handleTotal(updatedGood, bad, neutral);

  }
  const handleBad = () => {
    setBad(bad+1);
    const updatedBad = bad+1;
    handleTotal(good, updatedBad, neutral);
  }
  function handleNeutral(){
    setNeutral(neutral+1);
    const updatedNeutral = neutral+1;
    handleTotal(good, bad, updatedNeutral);
  }
  const handleTotal = (good, bad, neutral) => {
    setTotalFeedback(good+bad+neutral)
    
    // Calculates Postive feedback score
    const tempTotalFeedback = totalFeedback+1;
    if(good === 0){
      setPositiveFeedback(0);
    }else{
      const percentage = good/tempTotalFeedback*100;
      setPositiveFeedback(percentage);
    }
    // Calculates Average Feedback score
    if(totalFeedback === 0){
      setAverage(0);
    }else{
      const weightedBad = -1;
      const weightedGood = 1;
      const weightedNeutral = 0;
      const average = (
          (good*weightedGood) +
          (neutral*weightedNeutral) +
          (bad*weightedBad))/tempTotalFeedback;
      setAverage(average);
    }
  }

  return(
    <>
      <Button onClickFunction={handleGood} buttonName={'Good'} />
      <Button onClickFunction={handleBad} buttonName={'Bad'} />
      <Button onClickFunction={handleNeutral} buttonName={'Neutral'} />

      <h2>Statistics</h2>
      <Display good={good} bad={bad} neutral={neutral} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} average={average} />
    </>
    
  )
}

export default Feedback;