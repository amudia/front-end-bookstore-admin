import React from 'react'
import { Switch, Route } from  'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Users from './tables/users/Users'
import Form_edit_user from './forms/Form_edit_user'

const Content = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/users" component={Users}/>
            <Route exact path="/edit_user" component={Form_edit_user}/>
        </Switch>
    )
}

export default Content;