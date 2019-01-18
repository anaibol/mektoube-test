import React, { Component } from 'react'

import isMobile from 'is-mobile'

import MobileLayout from 'components/MobileLayout'
import DesktopLayout from 'components/DesktopLayout'
import Login from 'components/Login'

import { connect } from 'react-redux'


class App extends Component {
  constructor(props) {
    super(props)

    const token = localStorage.getItem('token')
    console.log(token)
  }

  render() {
    console.log(this.props.login)
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
