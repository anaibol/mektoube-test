import React, { Component } from 'react'

import isMobile from 'is-mobile'

import MobileLayout from './components/MobileLayout'
import DesktopLayout from './components/DesktopLayout'

class App extends Component {
  render() {
    if (isMobile()) {
      return <MobileLayout />
    } else {
      console.log(123)
      return <DesktopLayout />
    }
  }
}

export default App
