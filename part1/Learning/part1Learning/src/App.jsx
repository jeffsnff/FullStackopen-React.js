import Hello from './Hello.jsx'
const App = () => {
  const a = 20;
  const b = 9;


  return(
    <>
      <Hello name='Paola' age={a+b} />
      <p>How are you doing this morning?</p>
    </>
  )
}

export default App;