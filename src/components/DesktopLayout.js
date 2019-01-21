import React from 'react'

import { Link } from '@reach/router'

import { connect } from 'react-redux'

import styled from '@emotion/styled'

import logo from '../logo.png'

const Header = styled.header`
  width: 100%;
  background-color: #555;
  color: white;
  justify-content: center;
  align-items: center;
`

const Nav = styled.nav`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  max-width: 500px;
  margin-left: auto;
`

const Logo = styled.img`
  margin-left: 2rem;
`

function DesktopLayout({ user }) {
  return (
    <>
      <Header>
        <Link to="/">
          <Logo src={logo} alt="Mektoube logo" />
        </Link>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/">Chat</Link>
          <Link to="/">Encounters</Link>
          <Link to="/">Logout</Link>
        </Nav>
      </Header>
      <main>
        <div>UUID: {user.uuid}</div>
        <div>LOGIN: {user.login}</div>
        <div>EMAIL: {user.email}</div>
      </main>
      <footer></footer>
    </>
  )
}

export default connect(state => ({
  user: state.login.user,
}))(DesktopLayout)
