import React, { Component } from 'react'

import isMobile from 'is-mobile'

import MobileLayout from 'components/MobileLayout'
import DesktopLayout from 'components/DesktopLayout'
import Login from 'components/Login'

import { Redirect } from '@reach/router'


import { connect } from 'react-redux'


class App extends Component {
  constructor(props) {
    super(props)

    console.log(token)
  }

  render() {
    const token = localStorage.getItem('token')

    if (!token) return <Redirect to="/login" />

    if (isMobile()) {
      return <MobileLayout />
    } else {
      return <DesktopLayout />
    }
  }
}

export default connect(state => ({
  login: state.login,
}))(App)
