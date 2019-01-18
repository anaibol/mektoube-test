import React from 'react'

import { Router, Redirect, Link } from '@reach/router'

import { connect } from 'react-redux'

import styled from '@emotion/styled'

import Home from 'components/Home'
import Chat from 'components/Chat'
import Encounters from 'components/Encounters'
import Login from 'components/Login'

import logo from '../logo.png'

const Header = styled.header`
  width: 100%;
  background-color: #555;
  color: white;
  justify-content: center;
  align-items: center;
`

const Tabs = styled.nav`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`

const Tab = styled(Link)`
  height: 50px;
  align-items: center;
  justify-content: center;
`

function MobileLayout({ user }) {
  return (
    <>
      <Header>
        <Tabs>
          <Tab to="/">Home</Tab>
          <Tab to="/">Chat</Tab>
          <Tab to="/">Encounters</Tab>
          <Tab to="/">Logout</Tab>
        </Tabs>
      </Header>
      <main>
        <div>UUID: {user.uuid}</div>
        <div>LOGIN: {user.login}</div>
        <div>EMAIL: {user.email}</div>
        <Router>
          <Home path="/home" />
        </Router>
      </main>
      <footer></footer>
    </>
  )
}

export default connect(state => ({
  user: state.login.user,
}))(MobileLayout)
