import React, { Component } from 'react'
import Header from './Header'
import api from '../utils/api'


export default class Forecast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      forecast: ''
    }
  }

  componentDidMount() {
    var city = this.props.location.state.city;
    api.getCurrentWeather(city)
      .then(function(forecast){
        console.log(forecast)
        this.setState(function(){
          return{
            forecast:forecast
          }
        })
      }.bind(this));
  }


  render() {
    return (
      <div>
        <Header />
        {!this.state.repos
          ? <p>Loading</p>
          : console.log(this.state.forecast)}
      </div>
    )
  }
}
