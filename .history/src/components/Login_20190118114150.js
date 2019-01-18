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
  margin: .5rem;
  padding: .5rem;
`

const Button = styled.button`
  margin: .5rem;
  padding: .5rem;
  background-color: #555;
  border: none;
  color: white;
`

function Login({ loginRequest }) {
  return (
    <Container>
      <Form onSubmit={loginRequest}>
        <label for="username">Username</label>
        <Input placeholder="Your username" name="username" />
        <label for="password">Password</label>
        <Input placeholder="Your password" name="password" type="password" />
        <Button>Login</Button>
      </Form>
    </Container>
  )
}

export default connect(state => ({
  login: state.login
}), { loginRequest })(Login)