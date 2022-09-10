import { combineReducers } from 'redux'
import userReducer from './userReducers.jsx'

export default combineReducers({
  users: userReducer
})