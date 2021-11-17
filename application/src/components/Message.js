import React from 'react';
import './Message.scss';

function Message({ text }) {
  return (
    <div className="message">
      <h2>{text}</h2>
    </div>
  );
}

export default Message;
