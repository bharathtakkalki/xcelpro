import React from 'react'
import {BrowserRouter as Router,Route } from 'react-router-dom'
import LandingPage from './screens/LandingPage'
import Dashboard from './screens/Dashboard'




const Controller = () =>{
    return(
        <Router>
            <Route exact path='/' render={(props) => <LandingPage {...props} /> }  />
            <Route path='/dashboard' render={(props) =><Dashboard {...props} />  }/>
        </Router>
    )
}

export default Controller;