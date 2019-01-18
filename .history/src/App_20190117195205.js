import React, { Component } from 'react'

import isMobile from 'is-mobile'

import MobileLayout from './components/MobileLayout'
import DesktopLayout from './components/DesktopLayout'

import baseStyles from './index.css'

class App extends Component {
  render() {
    if (isMobile()) {
      return <MobileLayout />
    } else {
      return <DesktopLayout />
    }
  }
}

export default App
