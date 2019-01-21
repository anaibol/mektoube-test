import { combineReducers } from 'redux'

import apiClient from './api-client'
import auth from './auth'

export default combineReducers({ apiClient, auth })