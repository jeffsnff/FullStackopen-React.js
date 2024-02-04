

const Button = ({ onClickFunction, buttonName }) => {
  return(
    <button onClick={onClickFunction}>{buttonName}</button>
  );
}

export default Button;