import { combineReducers } from 'redux'

import apiClient from './api-client'
import login from './login'

export default combineReducers({ apiClient, login })