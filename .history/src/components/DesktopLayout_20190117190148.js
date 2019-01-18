import React from 'react'

import { Router, Link } from '@reach/router'


import styled from '@emotion/styled'

const Columns = styled.div`

`

const Column = styled.div`

`


export default function MobileLayout() {
  return (
    <Router>
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