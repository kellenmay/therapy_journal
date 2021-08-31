import React from 'react'
import { Switch, Route } from 'react-router-dom'
import EntriesContainer from './EntriesContainer'
import Journal from './Journal'
import Home from './Home'
import Profile from './Profile'
import Users from './UsersContainer'


const Router = () => {
    return (
    <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/entries' component={Journal} />
           <Route exact path='/Profile' component={Profile} />
           <Route exact path='/entries/new' component={EntriesContainer} />
           <Route exact path='/users/new' component={Users} />
    </Switch>
    )
}

export default Router
