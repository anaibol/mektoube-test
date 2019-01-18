import React from 'react'

import { connect } from 'react-redux'

import loginRequest from 'redux/modules/login'

function Login() {
  return (
    <div>

    </div>
  )
}

export default connect(state => ({
  login: state.login
}), { loginRequest })(Login)