import React from 'react'

import { connect } from 'react-redux'

import { loginRequest } from 'redux/modules/login'

import styled from '@emotion/styled'

const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  align-items: center;
`

const Input = styled.input`
`

const Button = styled.button`
`

export default Login({ loginRequest }) => {
  state = {
    username: 'flo98732',
    password: 'flo98732de'
  }

  onSubmit = e => {
    const { username, password } = this.state

    this.props.loginRequest({ username, password })
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <label for="username">Username</label>
          <Input placeholder="Your username" name="username" onChange={e => this.setState({ username: e.target.value })} />
          <label for="password">Password</label>
          <Input placeholder="Your password" name="password" type="password" onChange={e => this.setState({ password: e.target.value })} />
          <Button>Login</Button>
        </Form>
      </Container>
    )
  }
} {
  c


}

export default connect(state => ({
  login: state.login
}), { loginRequest })(Login)