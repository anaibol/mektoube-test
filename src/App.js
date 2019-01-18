import React from 'react'

import isMobile from 'is-mobile'

import MobileLayout from 'components/MobileLayout'
import DesktopLayout from 'components/DesktopLayout'
import Login from 'components/Login'

import { Router, Link, Redirect } from '@reach/router'

import { connect } from 'react-redux'

function App({ user }) {
  return (
    <Router>
      {user ? <Redirect from="/" to="/home" /> : <Login path="*" />}
      {isMobile() ? <MobileLayout path="*" /> : <DesktopLayout path="*" />}
    </Router>
  )
}

export default connect(state => ({
  user: state.login.user,
}))(App)
