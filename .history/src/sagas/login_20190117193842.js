const login = createAction('some action')

function* loginSaga() {
  // make some async staff
}

export default function* saga() {
  yield takeLatest(login.getType(), loginSaga)
  // and for each action the same staff ...
}