import Hello from './Hello.jsx'
const App = ({counter}) => {

  const name = 'Peter';
  const age = 31;

  return(
    <>
      <h1>Greetings!</h1>
      <Hello name='Maya' age={26+10} />
      <Hello name={name} age={age} />
      <p>{counter}</p>
    </>
  )
}

export default App;