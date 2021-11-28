import React from 'react';
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  chats: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'start',
    flexDirection: 'column',
    height: '100%',
    width: '40%'
  }
});
function ChatList({ chats, chatsId }) {
  const classes = useStyles();
  console.log(chats);
  return (
    <Box className={classes.chats}>
      { Object.keys(chats).map( (id, index) =>
        ( <Link underline='hover'
            style={{ 
              display: "block", 
              margin: "1rem 2rem",
              color: id === chatsId ? "#65b2c6" : "#c0cccc",
              textDecoration: 'none'
            }}
            to={`/chats/${id}`}
            key={index}
          >
            {chats[id].name}
          </Link>)
        ) }
    </Box>  
  );
}

export default ChatList;
