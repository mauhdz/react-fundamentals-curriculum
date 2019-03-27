var React = require ('react')

var PropTypes = require('prop-types')
import utils from "../utils/helper"

export default function Day(props) {
    var date = utils.getDate(props.dt)
    var img_url = './app/images/weather-icons/' + props.icon + '.svg'
    return (
        <div >
            <img
                alt='Image not found'
                src={img_url}
            />
            <p style={{ color: 'black' }}>{date}</p>
        </div>
    )
}

Day.prototype = {
    key: PropTypes.number.isRequired,
    dt: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
}
