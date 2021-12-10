import React from 'react';
import ChatList from'../components/ChatList';
import { Container, Box, Typography } from '@material-ui/core';
import { useParams } from "react-router-dom";
import MessagesList from'../components/MessagesList';


export default function Chats() {
  const { chatsId } = useParams();
  
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
            height: '110%',
            borderRadius: '5px'
          }}>
          <h2 style={{ marginLeft: "10%"}}>Chats</h2>
          <ChatList />
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
            ? <MessagesList/>
            : <Box style={{ padding: 30, fontSize: 20, textAlign: "center" }}>Please, choose chats on the left</Box>
          }
      </Box>
    </Typography>
    </Container>
  );
}

