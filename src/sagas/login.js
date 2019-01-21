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
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from 'redux/modules/login'

import {
  API_CLIENT_UNSET,
  setApiClient,
  unsetApiClient,
} from 'redux/modules/api-client'

import api from 'lib/api-client'

function loginApi(username, password) {
  return api.post('/gate/flo98732.json', qs.stringify({
    login: username,
    password: password,
    validitySeconds: 7776000
  }))
}

function* logout() {
  yield put(unsetApiClient())

  localStorage.removeItem('token')

  navigate('/login')
}

function* loginFlow(username, password) {
  let token
  try {
    const response = yield call(loginApi, username, password)


    yield put(setApiClient(response.CONTENT.token))

    yield put({
      type: LOGIN_SUCCESS,
      user: response.CONTENT.USER
    })

    localStorage.setItem('token', JSON.stringify(token))

    navigate('/home')
  } catch (error) {
    yield put({
      type: LOGIN_ERROR,
      error
    })
  } finally {
    if (yield cancelled()) {
      navigate('/login')
    }
  }

  return token
}

export default function* loginWatcher() {

  while (true) {
    const {
      username,
      password
    } = yield take(LOGIN_REQUESTING)
    const task = yield fork(loginFlow, username, password)

    const action = yield take([API_CLIENT_UNSET, LOGIN_ERROR])

    if (action.type === API_CLIENT_UNSET) yield cancel(task)

    yield call(logout)
  }
}