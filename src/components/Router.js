import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Journal from './Journal'
import Profile from './Profile'


const Router = () => {
    return (
    <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/entries' component={Journal} />
           <Route exact path='/Profile' component={Profile} />
    </Switch>
    )
}

export default Router
