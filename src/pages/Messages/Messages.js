import React from 'react'
import MessageItem from './MessageItem'
import Message from './Message'
import {
  updateNewMessageBodyCreator,
  sendMessageCreator
} from '../../redux/messagesReducer'

const Messages = props => {
  let state = props.store.getState().messagesPage
  let newMessageBody = state.newMessageBody

  const onSendMessageClick = () => {
    props.dispatch(sendMessageCreator())
  }

  const onMessageChange = e => {
    props.dispatch(updateNewMessageBodyCreator(e.target.value))
  }

  return (
    <>
      <h3 className="messages_title">Messages</h3>
      <div className="row">
        <div className="contacts col s3">
          {props.contacts.map(item => (
            <MessageItem key={item.id} name={item.name} id={item.id} />
          ))}
        </div>
        <div className="col s9 messages_wrapper">
          {props.messages.map(item => (
            <Message message={item.message} key={item.id} id={item.id} />
          ))}
          <div className="input-field">
            <textarea
              onChange={onMessageChange}
              placeholder="Your message..."
              className="materialize-textarea"
              value={newMessageBody}
            ></textarea>
            <div className="btn-wrapper">
              <button onClick={onSendMessageClick} className="btn blue">
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Messages
