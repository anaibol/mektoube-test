import React from 'react'

import { connect } from 'react-redux'

import loginRequest from 'redux/modules/login'

function Login({ loginRequest }) {
  console.log(loginRequest)
  return (
    <div>
      <button onClick={loginRequest}>Login</button>
    </div>
  )
}

export default connect(state => ({
  login: state.login
}), { loginRequest })(Login)