import React, { Component } from 'react'

import isMobile from 'is-mobile'

import MobileLayout from './components/MobileLayout'
import DesktopLayout from './components/DesktopLayout'

import { connect } from 'react-redux'

class App extends Component {
  render() {
    if (isMobile()) {
      return <MobileLayout />
    } else {
      return <DesktopLayout />
    }
  }
}

export default connect(App, , state => ({
  user: state.auth.user,
}))
