import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CityInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var value = event.target.value;
        this.setState(function () {
            return {
                city: value
            }
        })
    }

    render() {
        return (
            <div>
                <input
                    className='input'
                    placeholder='Mexico City'
                    type='text'
                    autoComplete='off'
                    value={this.state.username}
                    onChange={this.handleChange} />

                <Link to={{
                    pathname: '/forecast',
                    state: {
                        city: this.state.city
                    }
                }}>
                    <button className='btn'>
                        Get Weather
                    </button>
                </Link>
            </div>
        )
    }
}
