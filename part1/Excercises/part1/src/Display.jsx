
const Display  = ({ 
  good,
  bad,
  neutral,
  totalFeedback,
  positiveFeedback,
  average

}) => {

  return (
    <>
    <h2>Statistics</h2>
      <div>
        Total Votes : {totalFeedback}
      </div>
      <div>
        Average : {average}
      </div>
      <div>
        Positive : {positiveFeedback}%
      </div>
    </>
  );
}

export default Display;