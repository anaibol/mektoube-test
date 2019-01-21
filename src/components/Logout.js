import { Component } from 'react'

import { logout } from 'redux/modules/login'

export default class Logout extends Component {
  componentDidMount() {
    logout()
  }

  render() {
    return null
  }
}
