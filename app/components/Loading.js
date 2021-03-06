import React, {Component} from 'react';
import PropTypes from 'prop-types'

var styles = {
    content: {
        color:'black',
        textAlign: 'center',
        fontSize: '35px'
    }
}

export default class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: props.text
        }
    }

    componentDidMount() {
        var stoppper = this.props.text + '...'
        this.interval = window.setInterval(function () {
            if (this.state.text === stoppper) {
                this.setState(function () {
                    return {
                        text: this.props.text
                    }
                })
            }
            else {
                this.setState(function (prevState) {
                    return {
                        text: prevState.text+ '.'
                    }
                })
            }
        }.bind(this), this.props.speed)
    }

    componentWillUnmount(){
        window.clearInterval(this.interval)
    }
    
    render() {
        return (
            <div>
                <p style={styles.content}>
                    {this.state.text
                    }</p>
            </div>
        )
    }
}
Loading.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
    text: 'Loading',
    speed: 300
}


