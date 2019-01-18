import React from 'react'

import { Router, Link } from '@reach/router'



import styled from '@emotion/styled'

import Home from 'components/Home'
import Chat from 'components/Chat'
import Encounters from 'components/Encounters'
import Login from 'components/Login'

import logo from '../logo.png'

const Columns = styled.div`

`

const Column = styled.div`

`


export default function MobileLayout() {
  return (
    <Router>
      <Tabs path="*">
        <Tab to="/home">Home</Tab>
        <Tab to="/encounters">Encounters</Tab>
        <Tab to="/chat">Chat</Tab>
      </Tabs>
      <Home path="/" />
      <Encounters path="/" />
      <Login path="/" />
      <Chat path="/" />
      <Columns path="*">
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
      </Columns>
    </Router>
  )
}