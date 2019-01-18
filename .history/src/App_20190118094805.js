import React, { Component } from 'react'

import isMobile from 'is-mobile'

import MobileLayout from './components/MobileLayout'
import DesktopLayout from './components/DesktopLayout'

class App extends Component {
  render() {
    if (isMobile()) {
      console.log(123)
      return <MobileLayout />
    } else {
      return <DesktopLayout />
    }
  }
}

export default App
