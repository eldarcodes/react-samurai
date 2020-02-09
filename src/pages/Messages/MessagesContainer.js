import {
  updateNewMessageBodyCreator,
  sendMessageCreator
} from '../../redux/messagesReducer'
import Messages from './Messages'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    messagesPage: state.messagesPage
  }
}
const mapDispatchToProps = dispatch => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    updateNewMessageBody: body => {
      dispatch(updateNewMessageBodyCreator(body))
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer
