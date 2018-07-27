import React from 'react'
const Weather=(props)=>{
    return(
        <div>
        {props.country && <p>Country:{props.country}</p> }   
        {props.city&&<p>city:{props.city}</p>}
        {props.temp&&<p> temperature:{props.temp}</p>}
        {props.lat&&props.long&&<p>coordinate: {props.lat},{props.long}</p>}
        {props.pressure&&<p> pressure:{props.pressure}</p>}
        {props.humidity&&<p>humidity: {props.humidity}</p>}
        {props.desc&&<p>description:{props.desc}</p>}
        {props.error&&<p>{props.error}</p>}
        </div>
    )
}
export default Weather