import React, { Component } from 'react'
import Loading from '../components/Loading'
import Day from '../components/Day'

function Info(props) {
    var dt = props.forecast.dt;
    var icon = props.forecast.weather[0].icon;
    var city= props.city;
    var description=props.forecast.weather[0].description;
    var min_temp=props.forecast.temp.min;
    var max_temp=props.forecast.temp.max;
    var humidity=props.forecast.humidity;

    return (
        <div >
            {<Day key={dt} dt={dt} icon={icon} /> }
            <p>{city}</p>
            <p>{description}</p>
            <p>{min_temp}</p>
            <p>{max_temp}</p>
            <p>{humidity}</p>
        </div>
    )
}
export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: null,
            city:null
        }
    }

    componentDidMount() {
        const forecast = this.props.location.state.forecast;
        const city = this.props.location.state.city;

        // console.log(forecast)
        this.setState(function () {
            return {
                forecast: forecast,
                city:city
            }
        })
    }
    render() {
        return(
            <div>
                {!this.state.forecast
                    ?<Loading/>
                    : <Info
                    forecast={this.state.forecast}
                    city={this.state.city}/>
                }
            </div>
        )
    }
      
}
