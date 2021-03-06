import React, { Component } from 'react'

import { connect } from 'react-redux'

import { authRequest } from 'redux/modules/auth'

import styled from '@emotion/styled'

import logo from '../logo.png'

const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  align-items: center;
`

class Login extends Component {
  state = {
    username: 'flo98732',
    password: 'flo98732de'
  }

  onSubmit = e => {
    e.preventDefault()

    const { username, password } = this.state

    this.props.authRequest({ username, password })
  }

  render() {
    const { username, password } = this.state
    const { requesting } = this.props.auth

    return (
      <Container>
        {requesting && 'Logging in...'}
        {!requesting &&
          <Form onSubmit={this.onSubmit}>
            <img src={logo} alt="Mektoube logo" />
            <h1>Login</h1>
            <label htmlFor="username">Username</label>
            <input placeholder="Your username" name="username" onChange={e => this.setState({ username: e.target.value })} defaultValue={username} />
            <label htmlFor="password">Password</label>
            <input placeholder="Your password" name="password" type="password" onChange={e => this.setState({ password: e.target.value })} defaultValue={password} />
            <button>Login</button>
          </Form>
        }
      </Container>
    )
  }
}

export default connect(state => ({
  auth: state.auth
}), { authRequest })(Login)