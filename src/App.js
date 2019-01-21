import React from 'react'

import isMobile from 'is-mobile'

import MobileLayout from 'components/MobileLayout'
import DesktopLayout from 'components/DesktopLayout'
import Login from 'components/Login'
import Logout from 'components/Logout'

import { Router, Redirect } from '@reach/router'

import { connect } from 'react-redux'

function App({ user }) {
  return (
    <Router>
      <Logout path="/logout" />
      {user ? <Redirect from="/" to="/home" /> : <Login path="*" />}
      {isMobile() ? <MobileLayout path="*" /> : <DesktopLayout path="*" />}
    </Router>
  )
}

export default connect(state => ({
  user: state.login.user,
}))(App)
