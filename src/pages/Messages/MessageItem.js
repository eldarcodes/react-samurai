import React from "react";
import {NavLink} from "react-router-dom";

const MessageItem = props => {
  return (
    <NavLink className="message_item" to={`/messages/${props.id}`}>
      {props.name}
    </NavLink>
  );
};

export default MessageItem;
