import React from 'react'
import { Switch, Route } from 'react-router-dom'
import EntriesContainer from './EntriesContainer'
import Journal from './Journal'
import Home from './Home'
import Profile from './Profile'
import Users from './UsersContainer'
import { useAuth0 } from '@auth0/auth0-react';


const Router = () => {

    const { isLoading } = useAuth0();

    if (isLoading) return <div>Loading...</div>
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
