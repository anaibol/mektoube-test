import { Component } from 'react'

import { logout } from 'redux/modules/auth'

export default class Logout extends Component {
  componentDidMount() {
    logout()
  }

  render() {
    return null
  }
}
