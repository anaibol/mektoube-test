const API_CLIENT_SET = 'API_CLIENT_SET'
const API_CLIENT_UNSET = 'API_CLIENT_UNSET'

// there's literally no reason these are in a different
// format from the other component actions other than
// that I just lost track
export function setApiClient(token) {
  return {
    type: API_CLIENT_SET,
    token,
  }
}

export function unsetApiClient() {
  return {
    type: API_CLIENT_UNSET,
  }
}

import { API_CLIENT_SET, API_CLIENT_UNSET } from './constants'

const initialSate = {
  id: null,
  token: null,
}

const reducer = function apiClientReducer(state = initialSate, action) {
  switch (action.type) {
    case API_CLIENT_SET:
      return {
        id: action.token.userId,
        token: action.token,
      }

    case API_CLIENT_UNSET:
      return {
        id: null,
        token: null,
      }

    default:
      return state
  }
}

export default reducer