const login = createAction('some action')

function* someSaga() {
  // make some async staff
}

export default function* saga() {
  yield takeLatest(login.getType(), someSaga)
  // and for each action the same staff ...
}