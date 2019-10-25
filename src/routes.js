import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/auth'
import Dashboard from './Components/dashboard'
import Form from './Components/form'
import Post from './Components/post'



export default (
    <Switch>
        <Route exact path = '/' component = {Auth}/>
        <Route path = '/Dashboard' component = {Dashboard}/>
        <Route path = '/New' component = {Form}/>
        <Route path = '/Post/:postid' component = {Post}/>



    </Switch>
)