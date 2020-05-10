import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Homepage from './components/Homepage'
import Contact from './components/Contact'

import './sass/styles.scss'

import * as serviceWorker from './serviceWorker'

class Root extends Component {

  render () {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route
              exact
              path='/'
              render={routeProps => <Homepage {...routeProps} />}
            />
            <Route
              exact
              path='/contact'
              render={routeProps => <Contact {...routeProps} />}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
