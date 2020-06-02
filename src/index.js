import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Homepage from './components/Homepage'
import Contact from './components/Contact'
import Competences from './components/pages/Competences'
import Experiences from './components/pages/Experiences'
import Formations from './components/pages/Formations'
import Loisirs from './components/pages/Loisirs'

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
              render={routeProps => <Homepage {...routeProps} title={`Bonjour et Bienvenue`} />}
            />
            <Route
              exact
              path='/contact'
              render={routeProps => <Contact {...routeProps} title={`Contacter-moi !`} />}
            />
            <Route
              exact
              path='/competences'
              render={routeProps => <Competences {...routeProps} title={`Mes compétences`} />}
            />
            <Route
              exact
              path='/experiences'
              render={routeProps => <Experiences {...routeProps} title={`Mes expériences`} />}
            />
            <Route
              exact
              path='/formations'
              render={routeProps => <Formations {...routeProps} title={`Mes formations`} />}
            />
            <Route
              exact
              path='/loisirs'
              render={routeProps => <Loisirs {...routeProps} title={`Mes loisirs`} />}
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
