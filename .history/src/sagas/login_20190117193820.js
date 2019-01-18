const someAction = createAction('some action')

function* someSaga() {
  // make some async staff
}

export default function* saga() {
  yield takeLatest(someAction.getType(), someSaga)
  // and for each action the same staff ...
}