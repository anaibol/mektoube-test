import { setClient } from '../client/actions'

function checkAuthorization(dispatch) {
  // attempt to grab the token from localstorage
  const storedToken = localStorage.getItem('token')

  // if it exists
  if (storedToken) {
    // parse it down into an object
    const token = JSON.parse(storedToken)

    // this just all works to compare the total seconds of the created
    // time of the token vs the ttl (time to live) seconds
    const createdDate = new Date(token.created)
    const created = Math.round(createdDate.getTime() / 1000)
    const ttl = 1209600
    const expiry = created + ttl

    // if the token has expired return false
    if (created > expiry) return false

    // otherwise, dispatch the token to our setClient action
    // which will update our redux state with the token and return true
    dispatch(setClient(token))
    return true
  }

  return false
}