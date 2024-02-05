import { useState } from 'react';
import Button from './Button.jsx';
import Display from './Display.jsx';
import Statistic from './Statistic.jsx';

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
    if(good === 0){
      setPositiveFeedback(0);
    }else{
      const tempTotalFeedback = totalFeedback+1;
      const percentage = good/tempTotalFeedback*100;
      setPositiveFeedback(percentage);
    }
  }



  return(
    <>
      <Button onClickFunction={handleGood} buttonName={'Good'} />
      <Button onClickFunction={handleBad} buttonName={'Bad'} />
      <Button onClickFunction={handleNeutral} buttonName={'Neutral'} />

      <h2>Statistics</h2>
      <Statistic data={good} name={'Good'} />
      <Statistic data={neutral} name={'Neutral'} />
      <Statistic data={bad} name={'Bad'} />
      <Statistic data={totalFeedback} name={'Total Votes'} />
      <Statistic data={positiveFeedback} name={'Positive Percent'} percentSign={'%'} />

    </>
    
  )
}

export default Feedback;