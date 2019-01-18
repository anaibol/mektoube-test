import React from 'react'

import { connect } from 'react-redux'

import { loginRequest } from 'redux/modules/login'

function Login({ loginRequest }) {
  return (
    <div>
      <form>

        <input placeholder="username" name="username" />
        <input placeholder="password" name="password" type="password" />
        <button onClick={loginRequest}>Login</button>
      </form>
    </div>
  )
}

export default connect(state => ({
  login: state.login
}), { loginRequest })(Login)