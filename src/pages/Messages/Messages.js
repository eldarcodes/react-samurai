import React from 'react'

import MessageItem from './MessageItem'
import Message from './Message'

import './Messages.scss'

const Messages = props => {
  const onSendMessageClick = () => {
    props.messagesPage.newMessageBody
      ? props.sendMessage()
      : alert('Введите текст сообщения!')
  }

  const onMessageChange = e => {
    props.updateNewMessageBody(e.target.value)
  }

  return (
    <>
      <h3 className="title">Messages</h3>
      <div className="row">
        <div className="contacts col s3">
          {props.messagesPage.contacts.map(item => (
            <MessageItem key={item.id} name={item.name} id={item.id} />
          ))}
        </div>
        <div className="col s9 messages-wrapper">
          {props.messagesPage.messages.map(item => (
            <Message message={item.message} key={item.id} id={item.id} />
          ))}
          <div className="input-field">
            <textarea
              onChange={onMessageChange}
              placeholder="Your message..."
              className="materialize-textarea"
              value={props.messagesPage.newMessageBody}
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
