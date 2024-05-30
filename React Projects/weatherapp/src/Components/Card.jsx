import React from 'react'
import './Card.scss'
const Card = ({temp,hum,pressure, min, max}) => {
  return (
    <div className='crd'>
      <div>
      <h2>Delhi</h2>
      <ul>
        <li><p>Temperature:</p>  <p>{temp}</p></li>
        <li><p>Humidity: </p>  <p>{hum}</p></li>
        <li><p>Pressure: </p>  <p>{pressure}</p>  </li>
        <li><p>Max: </p>  <p>{max}</p> </li>
        <li><p>Min:</p> <p>{min}</p></li>
      </ul>
      </div>
        
    </div>
  )
}

export default Card