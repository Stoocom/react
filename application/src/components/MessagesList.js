import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import Message from'./Message';
import InputFieldContainer from'./InputFieldContainer';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";
import { getDialogs } from "../store/chatsSelectors";
import { initMessageTrackingThunk } from '../store/dialogMessagesListReducer'

function MessagesList() {
  const dialogs = useSelector(getDialogs, shallowEqual);
  const { chatsId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initMessageTrackingThunk());
  }, [dispatch]);

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

      { dialogs.isHowBotMessage
        ? <div style={{ color: 'rgb(213, 114, 118)' }}>
            <span>Bot:</span>
            <span style={{ marginLeft: '10px' }}>Ваш запрос принят! Пожалуйста, ждите ответа!</span>
          </div>
        : <div></div> }
      <InputFieldContainer/>
    </Box>
  );
}

export default MessagesList;
