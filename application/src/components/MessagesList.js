import React from 'react';
import { Box } from '@material-ui/core';
import Message from'./Message';
import InputMessageBlock from'./InputMessageBlock';

function MessagesList({ messages, chatsId, setChats }) {
  let messagesActive = messages[chatsId].messages;
  return (
    <Box style={{ 
      marginLeft: '20px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '100%' }}
    >
      <h2>Сообщения</h2>
        { messagesActive.map( ({ text, author }, index) =>
          <Message
            key={index}
            author={author} 
            text={text}
          />
      )}
      <InputMessageBlock chatsId={chatsId} chats={messages} setChats={setChats}/>
    </Box>
  );
}

export default MessagesList;
