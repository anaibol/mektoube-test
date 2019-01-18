import React from 'react'

import { connect } from 'react-redux'

import { loginRequest } from 'redux/modules/login'

import styled from '@emotion/styled'

const Container = styled.div`
  justify-content: center;
  align-items: center;
`

function Login({ loginRequest }) {
  return (
    <div>
      <form onSubmit={loginRequest}>
        <input placeholder="username" name="username" />
        <input placeholder="password" name="password" type="password" />
        <button>Login</button>
      </form>
    </div>
  )
}

export default connect(state => ({
  login: state.login
}), { loginRequest })(Login)