import React, { Component } from 'react'
import CityInput from './CityInput'

export default class Header extends Component {
    render() {
        return (
            <header id='main-header'>
                <div className="container">
                    <h1 >The Beautiful Weather App</h1>
                    <CityInput />
                </div>
            </header>
        )
    }
}

