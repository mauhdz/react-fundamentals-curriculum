import React, { Component } from 'react'
import Header from './Header'
import CityInput from './CityInput'

export default class Home extends Component {

  render() {
    return (
      <div>
        <Header/>
        <section id='main-interface' style={{ backgroundImage: "url('app/images/pattern.svg')" }} >
          <div className="container">
            <p>Enter a City and State</p>
            <CityInput />
          </div>
        </section>
      </div>
    )
  }
}
