export const LOGIN_REQUESTING = 'LOGIN_REQUESTING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
const LOGIN_EXISTING = 'LOGIN_EXISTING'
const LOGOUT = 'LOGOUT'

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
}

// In order to perform an action of type LOGIN_REQUESTING
// we need an username and password
export function loginRequest({ username, password }) {
  return {
    type: LOGIN_REQUESTING,
    username,
    password,
  }
}

export default function (state = initialState, action) {
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