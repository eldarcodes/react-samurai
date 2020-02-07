import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'

let store = {
  _state: {
    messagesPage: {
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Hi'}
      ],
      contacts: [
        {
          id: 1,
          name: 'Eldar'
        },
        {
          id: 2,
          name: 'Vlad'
        },
        {
          id: 3,
          name: 'Stanislav'
        },
        {
          id: 4,
          name: 'Alexsey'
        }
      ],
      newMessageBody: ''
    },
    profilePage: {
      posts: [
        {id: 1, message: '123', likesCount: 11},
        {id: 2, message: '321', likesCount: 13},
        {id: 3, message: 'asd', likesCount: 9}
      ],
      newPostText: ''
    }
  },
  _callSubsriber() {
    console.log(1)
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubsriber = observer
  },

  dispatch(action) {
    profileReducer(this._state.profilePage, action)
    messagesReducer(this._state.messagesPage, action)

    this._callSubsriber(this._state)
  }
}

export default store
