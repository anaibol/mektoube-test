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
  padding: 0 2.5rem;
  justify-content: center;
  align-items: center;
`

const Nav = styled.nav`
  justify-content: space-around;
  align-items: center;
  flex: 1;
`

function DesktopLayout({ user }) {
  return (
    <>
      <Header>
        <img src={logo} />
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/">Chat</Link>
          <Link to="/">Encounters</Link>
        </Nav>
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
}))(DesktopLayout)
