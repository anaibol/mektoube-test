import React from 'react'

import { Link } from '@reach/router'

import { connect } from 'react-redux'

import styled from '@emotion/styled'

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
      </main>
      <footer></footer>
    </>
  )
}

export default connect(state => ({
  user: state.login.user,
}))(MobileLayout)
