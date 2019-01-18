const LOGIN_REQUESTING = 'LOGIN_REQUESTING'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'
const LOGIN_EXISTING = 'LOGIN_EXISTING'
const LOGOUT = 'LOGOUT'

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
}

// In order to perform an action of type LOGIN_REQUESTING
// we need an email and password
export default function loginRequest({ email, password }) {
  return {
    type: LOGIN_REQUESTING,
    email,
    password,
  }
}

// Since it's the only one here
export default loginRequest

const reducer = function loginReducer(state = initialState, action) {
  switch (action.type) {
    // Set the requesting flag and append a message to be shown
    case LOGIN_REQUESTING:
      return {
        requesting: true,
        successful: false,
        messages: [{ body: 'Logging in...', time: new Date() }],
        errors: [],
      }

    // Successful?  Reset the login state.
    case LOGIN_SUCCESS:
      return {
        errors: [],
        messages: [],
        requesting: false,
        successful: true,
      }

    // Append the error returned from our api
    // set the success and requesting flags to false
    case LOGIN_ERROR:
      return {
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        messages: [],
        requesting: false,
        successful: false,
      }

    default:
      return state
  }
}

export default reducer