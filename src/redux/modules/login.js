export const LOGIN_REQUESTING = 'LOGIN_REQUESTING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
const LOGOUT = 'LOGOUT'

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
  user: null
}

export function loginRequest({ username, password }) {
  return {
    type: LOGIN_REQUESTING,
    username,
    password,
  }
}

export function logout() {
  return {
    type: LOGOUT,
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
        user: action.user
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

    case LOGOUT:
      return {
        errors: [],
        messages: [],
        requesting: false,
        successful: true,
        user: null
      }

    default:
      return state
  }
}