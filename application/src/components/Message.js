import React from 'react';
import './Message.scss';

function Message({ author, text }) {
  return (
    <div className="message">
      <div className="message__title">{author}:</div>
      <span>{text}</span>  
    </div>
  );
}

export default Message;
