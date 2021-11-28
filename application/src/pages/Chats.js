import React, { useState }from 'react';
import ChatList from'../components/ChatList';
import { Container, Box, Typography } from '@material-ui/core';
import { useParams } from "react-router-dom";
import MessagesList from'../components/MessagesList';

const initialChats = {
  id1: {
    name: "Chat1",
    messages: [{ text: "FirstMessage", author: "Bob" }],
  },
  id2: {
    name: "Chat2",
    messages: [{ text: "FirstMessageHereToo!", author: "Angel" }],
  },
 };

export default function Chats() {

  const { chatsId } = useParams();
  const [ activeChatsId, setChatsId] = useState("");
  const [chats, setChats] = useState(initialChats);

  if (chatsId !== activeChatsId) {
    setChatsId(chatsId);
  }

  return (
    <Container style={{ margin: "0 auto", maxWidth: 800, padding: 0 }}>
    <Typography style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', padding: 0, width: '100%' }} component="div">
      <Box sx={{
            width: "33%",
            backgroundColor: '#f0eeef',
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'start',
            flexDirection: 'column',
            height: '30vh',
            borderRadius: '5px'
          }}>
          <ChatList chats={chats} chatsId={activeChatsId}/>
      </Box>
      <Box sx={{
            width: "64.5%",
            backgroundColor: 'lightgrey',
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'start',
            flexDirection: 'column',
            height: '100%',
            borderRadius: '5px',
            ml: '2.5%'
          }}>
          { chatsId
            ? <MessagesList messages={chats} chatsId={activeChatsId} setChats={setChats}/>
            : <Box>Выберите чат в колонке слева</Box>
          }
      </Box>
    </Typography>
    </Container>
  );
}

