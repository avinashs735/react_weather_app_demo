import React,{Component} from 'react'

import Weather from './content/weather'
import Reactform from './content/reactform'
import Webinfo from './content/webinfo'
const App_Key="2bd87e917ea010bc229ac87a94f8a44b";
export default class Main extends Component{
    state={
        temperature:"",
        lat:"",
        long:"",
        pressure:"",
        humidity:"",
        description:"",
        country:"",
        city:"",
        error:""

    }
    weatherforecast=async(e)=>{
        e.preventDefault();
        const city=e.target.elements.city.value;
        const country=e.target.elements.country.value;
        const fetch_api= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&&appid=${App_Key}&units=metric`);
        const data= await fetch_api.json();
        
        if(city && country)
        {
            console.log(data);
            this.setState({
            country:data.sys.country,
            temperature:data.main.temp,
            humidity:data.main.humidity,
            description:data.weather[0].description,
            city:data.name,
            lat:data.coord.lat,
            long:data.coord.lon,
            pressure:data.main.pressure,
            error:""
        })
    }
    else{
        this.setState({
            country:undefined,
            temperature:undefined,
            humidity:undefined,
            description:undefined,
            city:undefined,
            lat:undefined,
            long:undefined,
            pressure:undefined,
            error:"please fill the empty field"
        })

    }
}
    render(){
        return(
            <div>
                <Webinfo/>
                <Reactform weatherforecast={this.weatherforecast}/>
                <Weather country={this.state.country}temp={this.state.temperature} humidity={this.state.humidity}
                desc={this.state.description} city={this.state.city} lat={this.state.lat} long={this.state.long}
                pressure={this.state.pressure} error={this.state.error}/>
                
                
            </div>
        );
    }
} 