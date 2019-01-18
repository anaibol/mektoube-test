import loginSaga from './login'

export default function* rootSaga() {
  yield [
    loginSaga(),
  ]
}