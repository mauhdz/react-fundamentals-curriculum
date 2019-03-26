import React, { Component } from 'react'
import queryString from 'query-string'
import api from '../utils/api'
import utils from "../utils/helper"
import Loading from '../components/Loading'

function Day (props){
  //console.log('date: '+ props.dt+ 'icon' +props.icon)
  var date=utils.getDate(props.dt)
  var img_url= './app/images/weather-icons/'+props.icon+'.svg'
  return(
    <div >
      <img
        alt='Image not found'
        src= {img_url}
      />
      <p style={{color:'black'}}>{date}</p>
    </div>
  )
}

export default class Forecast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city:null,
      forecast: null,
      loading: true,
      error: null
    }
  }

  componentDidMount() {
    var city = queryString.parse(this.props.location.search).city;

    api.getForecast(city)
      .then(function (forecast) {
        this.setState(function () {
          return {
            city: city,
            forecast: forecast,
            loading: false,
            error: null
          }
        })
      }.bind(this))
      .catch(function (error) {
        console.log(error)
        this.setState(function () {
          return {
            city:city,
            forecast: null,
            loading: false,
            error: 'An error ocurred'
          }
        })
      }.bind(this));
  }


  render() {
    var forecast = this.state.forecast;
    var loading = this.state.loading;
    var error = this.state.error;

    if (loading) {
      return <Loading />
    }
    if (error != null) {
      return <p>{error}</p>
    }

    return (
      <div>
        <h1 style={{color:'black'}}>{this.state.city}</h1>
        {forecast.list.map(function(item){
          return(
            <Day key={item.dt} dt={item.dt} icon={item.weather[0].icon}/>
          )
        })}
      </div>
    )
  }
}
