import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { isLoggedIn } from '../helpers/authentication'

const PrivateRoute = ({ component: Component, ...rest }, replace) => (
  <Route
    {...rest}
    render={props => (
      isLoggedIn() === true
        ? <Component {...props} /> 
        : <Redirect to={{
          pathname: '/signin',
          state: { from: props.location }
      }} />
    )}
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
}

export default PrivateRoute
