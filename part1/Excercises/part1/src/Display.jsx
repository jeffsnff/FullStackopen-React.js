
const Rating  = ({ good, bad, neutral }) => {
  return (
    <>
    <h2>Statistics</h2>
      <div>
        Good : {good}
      </div>
      <div>
        Neutral : {neutral}
      </div>
      <div>
        Bad : {bad}
      </div>
    </>
  );
}

export default Rating;