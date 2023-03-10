import React from "react";

interface Message {
  name: string;
  message: string;
  date: Date;
}

const Message: React.FC<Message> = ({ name, date, message }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB");
  return (
    <div className="message">
      <span className="message-upper">
        <b>{name}</b> {formattedDate}
      </span>
      <span className="message-lower">{message}</span>
    </div>
  );
};

export default Message;
