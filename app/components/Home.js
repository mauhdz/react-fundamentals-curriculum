import React, { Component } from 'react'
import CityInput from './CityInput'

export default class Home extends Component {

  render() {
    return (
      <div>
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
