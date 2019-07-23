import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import App from './App';

const history = createHistory()

render((
  <Router history={history}>
    <App />
  </Router>
), document.getElementById('root'))
