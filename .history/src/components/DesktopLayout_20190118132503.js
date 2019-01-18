import React from 'react'

import { Router, Redirect, Link } from '@reach/router'

import styled from '@emotion/styled'

import Home from 'components/Home'
import Chat from 'components/Chat'
import Encounters from 'components/Encounters'
import Login from 'components/Login'

import logo from '../logo.png'

const Columns = styled.div`

`

const Column = styled.div`

`


export default function DesktopLayout() {
  return (
    <Router>
      <Redirect from="/" to="/login" />
      <Login path="/login" />

    </Router>
  )
}