import { useState } from 'react';
import Hello from './Hello.jsx';
import Display from './Display.jsx';
import Button from './Button.jsx';
import History from './History.jsx';


const App = () => {

  const [ left, setLeft ] = useState(0);
  const [ right, setRight ] = useState(0);
  const [ allClicks, setAll ] = useState([]);
  const [ totalButtonPress, setTotalButtonPress ] = useState(0);

  const handleLeftClick = () => {
    setLeft(left+1);
    handleAll('Left');

  }

const handleRightClick = () => {
  setRight(right+1);
  handleAll('Right');
}
const handleAll = (buttonClicked) => {
  setAll(allClicks.concat(buttonClicked))
  handleButtonPress();
}
const handleButtonPress = () => {
  setTotalButtonPress(totalButtonPress+1);
}
  return(
    <>
      {/* Do not change the Hello*/}
      <Hello />

      <Display text={'Left Click : '} count={left} />
      <Button onClick={handleLeftClick} name={'Left Click'} />
      <Display text={'Right Click : '} count={right} />
      <Button onClick={handleRightClick} name={'Right Click'} />
      <History allClicks={allClicks} />
      <p>Total Button Press : {totalButtonPress}</p>
    </>
  )
}

export default App;