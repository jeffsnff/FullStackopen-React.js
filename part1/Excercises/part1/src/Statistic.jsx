
const Statistic = ({data, name, percentSign}) => {

  return(
    <tr>
      <td>
      {name} : 
    </td>
    <td>
      {data}{percentSign}
    </td>
    </tr>
    
    
  )
}

export default Statistic;