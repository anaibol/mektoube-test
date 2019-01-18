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

import styled from 'react-emotion'

const Tabs = styled.nav`
  
`

const Tab = styled(Link)`

`


const Columns = styled.div`
  
`

const Column = styled.div`
  
`




class App extends Component {
  render() {
    if (isMobile()) {
      return (
        <Router>
          <Tabs>
            <Tab to="/home">Home</Tab>
            <Tab to="/encounters">Encounters</Tab>
            <Tab to="/chat">Chat</Tab>
          </Tabs>
          <Home exact path="/" />
          <Encounters exact path="/" />
          <Login exact path="/" />
          <Chat exact path="/" />
        </Router>

      )
    } else {
      return (
        <Router>
          <Columns>
          </Columns>
        </Router>

      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
