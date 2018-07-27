import React from 'react'

export default function Reactform(props){
    return(
        <div>
            <form onSubmit={props.weatherforecast}>
                <input type="text" name="city" placeholder="city..."/>
                <input type="text" name="country" placeholder="country...."/>
                <button >Check</button>
            </form>
        </div>
    )
}

/*export default class Reactform extends Component{
    render(){
        return(
            <div>
            <form onSubmit={this.props.weatherforecast}>
                <input type="text" name="city" placeholder="city..."/>
                <input type="text" name="country" placeholder="country...."/>
                <button >Check</button>
            </form>
            </div>
        )
    }
}*/