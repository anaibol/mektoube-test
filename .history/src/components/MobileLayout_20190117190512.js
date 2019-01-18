import React from 'react'

import { Router, Link } from '@reach/router'

import styled from '@emotion/styled'

import Home from 'components/Home'
import Chat from 'components/Chat'
import Encounters from 'components/Encounters'
import Login from 'components/Login'

import logo from '../logo.png'

const Tabs = styled.nav`

`

const Tab = styled(Link)`

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
    </Router>

  )
}