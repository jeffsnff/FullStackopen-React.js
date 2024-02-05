import Statistic from "./Statistic.jsx";

const Display  = ({ 
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
  average

}) => {

  if(totalFeedback === 0){
    return(
      <p>No Feedback Given</p>
    )
  }else{
    return(
      <>
        <Statistic data={good} name={'Good'} />
        <Statistic data={neutral} name={'Neutral'} />
        <Statistic data={bad} name={'Bad'} />
        <Statistic data={totalFeedback} name={'Total Votes'} />
        <Statistic data={positiveFeedback} name={'Positive Percent'} percentSign={'%'} />
        <Statistic data={average} name={'Average'} />
      </>
    )
  }
}

export default Display;