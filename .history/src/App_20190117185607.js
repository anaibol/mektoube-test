import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'

import { Router, Link } from "@reach/router"

import isMobile from 'is-mobile'

import MobileLayout from './components/MobileLayout'
import DesktopLayout from './components/DesktopLayout'

import Home from './components/Home'
import Chat from './components/Chat'
import Encounters from './components/Encounters'
import Login from './components/Login'

import styled from '@emotion/styled'

import { Global, css } from '@emotion/core'


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
