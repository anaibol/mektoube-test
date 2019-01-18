const CLIENT_SET = 'CLIENT_SET'
const CLIENT_UNSET = 'CLIENT_UNSET'

// there's literally no reason these are in a different
// format from the other component actions other than
// that I just lost track
export function setClient (token) {
  return {
    type: CLIENT_SET,
    token,
  }
}

export function unsetClient () {
  return {
    type: CLIENT_UNSET,
  }
}

import { CLIENT_SET, CLIENT_UNSET } from './constants'

const initialSate = {
  id: null,
  token: null,
}

const reducer = function clientReducer (state = initialSate, action) {
  switch (action.type) {
    case CLIENT_SET:
      return {
        id: action.token.userId,
        token: action.token,
      }

    case CLIENT_UNSET:
      return {
        id: null,
        token: null,
      }

    default:
      return state
  }
}

export default reducer