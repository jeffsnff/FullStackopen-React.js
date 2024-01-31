
const History = (props) => {
  if(props.allClicks.length === 0){
    return(
      <p>
        This app is used by pressing the buttons
      </p>
    )
  }
  return(
    <p>
      Button Press History: {props.allClicks.join(' ')}
    </p>
  )
}

export default History;