import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Explore from './Explore';


function App() {
  return (
    <div className="App">

                <Router>  
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path='/explore' component={Explore} />

                    </Switch>
                </Router>
        
    </div>
  );
}

export default App;
