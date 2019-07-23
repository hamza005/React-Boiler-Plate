import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Signin from '../components/signin.component';
import Dashboard from '../components/dashboard.component';

import PrivateRoute from '../helpers/privateRoute';
const Main = () => (
  <Switch>
    <Route exact path="/signin" component={Signin} />
    <PrivateRoute exact path='/home' component={Dashboard}/> 
    <Route path="/" component={Dashboard} />
  </Switch>
)

export default Main
