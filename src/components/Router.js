import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import EntriesContainer from './EntriesContainer'
import Profile from './Profile'


const Router = () => {
    return (
       <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/Entries' component={EntriesContainer} />
           <Route exact path='/Profile' component={Profile} />
       </Switch>
    )
}

export default Router
