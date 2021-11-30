import React from 'react';
import { Box } from '@material-ui/core';
import Message from'./Message';
import InputMessageBlock from'./InputMessageBlock';
import { useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";
import { getDialogs } from "../store/chatsSelectors";

function MessagesList() {
  const dialogs = useSelector(getDialogs, shallowEqual);
  const { chatsId } = useParams();
  return (
    <Box style={{ 
      marginLeft: '20px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '100%' }}
    >
      <h2>Messages</h2>
      { dialogs.messages[chatsId] ? dialogs.messages[chatsId].map( ({ id, text, author }) =>
          <Message
            key={id}
            author={author} 
            text={text}
          />
        )
        : <div>Empty chat</div>
      }
      <InputMessageBlock />
    </Box>
  );
}

export default MessagesList;
