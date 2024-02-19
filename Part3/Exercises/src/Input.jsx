
function Input({ inputValue, onChange, inputType }){
  return(
    <>
      {inputType}: <input value={inputValue} onChange={onChange} />
    </>
  );
}

export default Input;