export const AUTH_REQUESTING = 'AUTH_REQUESTING'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_ERROR = 'AUTH_ERROR'
export const LOGOUT = 'LOGOUT'

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
  user: null
}

export function authRequest({ username, password }) {
  return {
    type: AUTH_REQUESTING,
    username,
    password,
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    // Set the requesting flag and append a message to be shown
    case AUTH_REQUESTING:
      return {
        requesting: true,
        successful: false,
        messages: [{ body: 'Logging in...', time: new Date() }],
        errors: [],
      }

    // Successful?  Reset the login state.
    case AUTH_SUCCESS:
      return {
        errors: [],
        messages: [],
        requesting: false,
        successful: true,
        user: action.user
      }

    // Append the error returned from our api
    // set the success and requesting flags to false
    case AUTH_ERROR:
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