import {updateNewMessageBody, sendMessage} from '../../redux/messagesReducer'
import Messages from './Messages'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    messagesPage: state.messagesPage
  }
}

const MessagesContainer = connect(mapStateToProps, {
  sendMessage,
  updateNewMessageBody
})(Messages)

export default MessagesContainer
