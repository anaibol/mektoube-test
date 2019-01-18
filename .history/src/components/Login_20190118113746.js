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
  margin: 1rem 0;
`

function Login({ loginRequest }) {
  return (
    <Container>
      <Form onSubmit={loginRequest}>
        <input placeholder="username" name="username" />
        <input placeholder="password" name="password" type="password" />
        <button>Login</button>
      </Form>
    </Container>
  )
}

export default connect(state => ({
  login: state.login
}), { loginRequest })(Login)