import {createStore, combineReducers} from 'redux'
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import usersReducer from './usersReducer'

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer
})

let store = createStore(reducers)

export default store
