import loginSaga from './login'

export default function* IndexSaga() {
  yield [
    SignupSaga(),
    loginSaga(),
  ]
}