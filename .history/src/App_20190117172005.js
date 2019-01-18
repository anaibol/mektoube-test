import React, { Component } from 'react'
import logo from './logo.png'
import './App.css'

import isMobile from 'is-mobile'

import styled from 'react-emotion'

const Tabs = styled.div`
  
`

const Tab = styled.div`

`


const Columns = styled.div`
  
`

const Column = styled.div`
  
`


class App extends Component {
  render() {
    if (isMobile()) {
      return (
        <Tabs>
          <Tab>Home</Tab>
          <Tab>Encounters</Tab>
          <Tab>Chat</Tab>
        </Tabs>
      )
    } else {
      return (
        <Columns>
          <Yellow />
          <Green />
          <Purple />
        </Columns>
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
