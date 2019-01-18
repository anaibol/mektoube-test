import React from 'react'

import { Router, Redirect, Link } from '@reach/router'



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


export default function DesktopLayout() {
  const token = localStorage.getItem('token')

  if (!token) return


  return (
    <Router>
      <Redirect path="/" to="/login" />
      <Login path="/login" />
      <Home path="/" />
      <Encounters path="/encounters" />
      <Chat path="/chat" />
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