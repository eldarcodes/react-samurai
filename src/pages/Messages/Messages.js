import React from "react";
import MessageItem from "./MessageItem";
import Message from "./Message";

const Messages = () => {
  const db = [
    {
      id: 1,
      name: "Eldar"
    },
    {
      id: 2,
      name: "Vlad"
    },
    {
      id: 3,
      name: "Stanislav"
    },
    {
      id: 4,
      name: "Alexsey"
    }
  ];

  const messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hi"},
    {id: 3, message: "Hi"}
  ];
  return (
    <>
      <h3 className="messages_title">Messages</h3>
      <div className="messages row">
        <div className="messages_items col s3">
          {db.map(item => (
            <MessageItem key={item.id} name={item.name} id={item.id} />
          ))}
        </div>
        <div className="dialogs_messages col s9 ">
          {messages.map(item => (
            <Message message={item.message} key={item.id} id={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Messages;
