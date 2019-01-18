import React, { Component } from 'react'

import isMobile from 'is-mobile'

import MobileLayout from 'components/MobileLayout'
import DesktopLayout from 'components/DesktopLayout'
import Login from 'components/Login'

import { Redirect } from '@reach/router'


import { connect } from 'react-redux'


class App extends Component {
  render() {
    //     <Redirect from="/" to="/login" />
    return <Login path="/login" />

    console.log(this.props)
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
