import { useState } from 'react';
import Hello from './Hello.jsx';
import Display from './Display.jsx';
import Button from './Button.jsx';


const App = () => {

  const [ counter, setCounter ] = useState(0);
  const name = 'Peter';
  const age = 31;

const increaseByOne = () => {
  setCounter(counter+1);
}
const decreaseByOne = () => {
  setCounter(counter-1);
}
const setToZero = () => {
  setCounter(0);
}

  return(
    <>
      <h1>Greetings!</h1>
      <Hello name='Maya' age={26+10} />
      <Hello name={name} age={age} />
      <Display count={counter} />
      <Button onClick={increaseByOne} name={'Increase Counter'} />
      <Button onClick={decreaseByOne} name={'Decrease Counter'} />
      <Button onClick={setToZero} name={'Reset Counter'} />
    </>
  )
}

export default App;