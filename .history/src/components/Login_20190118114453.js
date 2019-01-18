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

function Login({ loginRequest }) {
  return (
    <Container>
      <Form onSubmit={loginRequest}>
        <label for="username">Username</label>
        <Input placeholder="Your username" name="username" value="flo98732" />
        <label for="password">Password</label>
        <Input placeholder="Your password" name="password" type="password" value="flo98732de" />
        <Button>Login</Button>
      </Form>
    </Container>
  )
}

export default connect(state => ({
  login: state.login
}), { loginRequest })(Login)