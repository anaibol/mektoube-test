import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects'

// We'll use this function to redirect to different routes based on cases
import { navigate } from "@reach/router"

// Helper for api errors
import { handleApiErrors } from '../lib/api-errors'

// Our login constants
import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants'

// So that we can modify our Client piece of state
import {
  setClient,
  unsetClient,
} from '../client/actions'

import {
  CLIENT_UNSET,
} from '../client/constants'

const loginUrl = `${process.env.REACT_APP_API_URL}/api/Clients/login`

function loginApi(email, password) {
  return fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => json)
    .catch((error) => { throw error })
}

function* logout() {
  // dispatches the CLIENT_UNSET action
  yield put(unsetClient())

  // remove our token
  localStorage.removeItem('token')

  // redirect to the /login screen
  navigate('/login')
}

function* loginFlow(email, password) {
  let token
  try {
    // try to call to our loginApi() function.  Redux Saga
    // will pause here until we either are successful or
    // receive an error
    token = yield call(loginApi, email, password)

    // inform Redux to set our client token, this is non blocking so...
    yield put(setClient(token))

    // .. also inform redux that our login was successful
    yield put({ type: LOGIN_SUCCESS })

    // set a stringified version of our token to localstorage on our domain
    localStorage.setItem('token', JSON.stringify(token))

    // redirect them to WIDGETS!
    browserHistory.push('/widgets')
  } catch (error) {
    // error? send it to redux
    yield put({ type: LOGIN_ERROR, error })
  } finally {
    // No matter what, if our `forked` `task` was cancelled
    // we will then just redirect them to login
    if (yield cancelled()) {
      browserHistory.push('/login')
    }
  }

  // return the token for health and wealth
  return token
}

// Our watcher (saga).  It will watch for many things.
function* loginWatcher() {
  // Generators halt execution until their next step is ready/occurring
  // So it's not like this loop is firing in the background 1000/sec
  // Instead, it says, "okay, tr