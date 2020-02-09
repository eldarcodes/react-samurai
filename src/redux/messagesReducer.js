const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {...state, newMessageBody: action.body}
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 6, message: body}]
      }
    }
    default:
      return state
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body
})

export default messagesReducer
