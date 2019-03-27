import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import api from '../utils/api'
import Day from '../components/Day'
import Loading from '../components/Loading'

export default class Forecast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: null,
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
            city: city,
            forecast: null,
            loading: false,
            error: 'An error ocurred'
          }
        })
      }.bind(this));
  }


  render() {
    var city=this.state.city;
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
        <h1 style={{ color: 'black' }}>{this.state.city}</h1>
        {forecast.list.map(function (item) {
          return (
            <Link to={{
              pathname: '/details',
              state:{
                city:city,
                forecast:item
              }
            }}>
              <Day key={item.dt} dt={item.dt} icon={item.weather[0].icon} />
            </Link>
            )
          })}
      </div>
          )
        }
}
