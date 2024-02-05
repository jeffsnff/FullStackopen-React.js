
const Statistic = ({data, name, percentSign}) => {

  return(
    <div>
      {name} : {data}{percentSign}
    </div>
    
  )
}

export default Statistic;