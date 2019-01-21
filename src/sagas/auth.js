import {
  take,
  fork,
  cancel,
  call,
  put,
  cancelled
} from 'redux-saga/effects'

import {
  navigate
} from "@reach/router"

import qs from 'querystring'

import {
  AUTH_REQUESTING,
  AUTH_SUCCESS,
  AUTH_ERROR,
  LOGOUT,
  logout
} from 'redux/modules/auth'

import {
  API_CLIENT_UNSET,
  setApiClient,
  unsetApiClient,
} from 'redux/modules/api-client'

import api from 'lib/api-client'

function authApi(username, password) {
  return api.post('/gate/flo98732.json', qs.stringify({
    login: username,
    password: password,
    validitySeconds: 7776000
  }))
}

export function* authFlow(username, password) {
  let token

  try {
    const response = yield call(authApi, username, password)

    yield put(setApiClient(response.CONTENT.token))

    yield put({
      type: AUTH_SUCCESS,
      user: response.CONTENT.USER
    })

    localStorage.setItem('token', JSON.stringify(token))

    navigate('/home')
  } catch (error) {
    yield put({
      type: AUTH_ERROR,
      error
    })
  } finally {
    if (yield cancelled()) {
      navigate('/auth')
    }
  }

  return token
}

export function* loginSaga() {
  while (true) {
    const {
      username,
      password
    } = yield take(AUTH_REQUESTING)
    //
    const task = yield fork(authFlow, username, password)

    const action = yield take([API_CLIENT_UNSET, AUTH_ERROR])

    if (action.type === API_CLIENT_UNSET) yield cancel(task)

    yield call(logout)
  }
}

export function* logoutSaga() {
  while (true) {
    yield take(LOGOUT)

    console.log('asdsd')
    navigate('/')

    yield put(unsetApiClient())

    localStorage.removeItem('token')
    navigate('/')

    yield call(logout)

  }
}
