
const Notification = ({title, message}) => {
  if(message === null){
    return null;
  }

  return(
    <div className={'error'}>
      <div>{title}</div>
      {message}
    </div>
  )
}

export default Notification