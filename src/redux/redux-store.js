import {createStore, combineReducers, applyMiddleware} from 'redux'
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
