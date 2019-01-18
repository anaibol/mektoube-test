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
  margin: 0 1rem;
`

const Button = styled.button`
  margin: 0 1rem;
`

function Login({ loginRequest }) {
  return (
    <Container>
      <Form onSubmit={loginRequest}>
        <Input placeholder="username" name="username" />
        <Input placeholder="password" name="password" type="password" />
        <button>Login</button>
      </Form>
    </Container>
  )
}

export default connect(state => ({
  login: state.login
}), { loginRequest })(Login)