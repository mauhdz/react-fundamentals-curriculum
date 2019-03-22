var React = require ('react')
var ReactDOM= require ('react-dom')
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Home from './Home'
import Forecast from './Forecast'
require ('../index.css')

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home} />   
                        {/* <Route exact path='/forecast' component={Forecast} />  */}
                        <Route 
                            exact path='/forecast' component={Forecast}/>
                        /> 
                         {/* <Route 
                            exact path='/forecast' com
                            render={(props) => <Forecast {...props} data={'baby'} />}
                        />  */}
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;