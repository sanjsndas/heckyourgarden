import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
    <Route path="/privacy" element={<PrivacyPolicy />} />
import TermsAndConditions from './views/terms-and-conditions';

<Route path="/terms" element={<TermsAndConditions />} />

        <Route component={NotFound} path="**" />
    
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
