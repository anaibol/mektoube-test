import { fork } from 'redux-saga/effects'
import { loginSaga, logoutSaga } from './auth'

export default function* root() {
  yield fork(loginSaga)
  yield fork(logoutSaga)
}