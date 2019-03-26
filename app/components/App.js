var React = require ('react')
var ReactDOM= require ('react-dom')
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Forecast from './Forecast'
require ('../index.css')

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={Home} />   
                        <Route exact path='/forecast' component={Forecast}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;