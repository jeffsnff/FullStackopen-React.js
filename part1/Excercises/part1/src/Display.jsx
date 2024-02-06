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
      <table>
        <thead>
          <tr>
            <td>Rating</td>
            <td>Score</td>
          </tr>
        </thead>
        <tbody>
            <Statistic data={good} name={'Good'} />
            <Statistic data={neutral} name={'Neutral'} />
            <Statistic data={bad} name={'Bad'} />
            <Statistic data={totalFeedback} name={'Total Votes'} />
            <Statistic data={positiveFeedback} name={'Positive Rating'} percentSign={'%'} />
            <Statistic data={average} name={'Average Rating'} />
        </tbody>
      </table>
        
    )
  }
}

export default Display;