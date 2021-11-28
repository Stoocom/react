import React, { useState, useRef, useEffect } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  inputBlock: {
    marginTop: '20px',
    marginRight: '15px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  formStyle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});


function InputMessageBlock({ chatsId, chats, setChats }) {
  const classes = useStyles();
  let activeChats = {};
  Object.assign(activeChats, chats);
  let messagesActive = activeChats[chatsId].messages;
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  const handleChange = (event) => {
    messagesActive.push({ text: name, author: message });
    activeChats[chatsId].messages = messagesActive;
    setChats(activeChats);
    setName("");
    setMessage("");
    inputRef.current.focus();
    event.preventDefault();
  }

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);

  return (
    <Box className={classes.inputBlock}>
        <form className={classes.formStyle} noValidate autoComplete="off" onSubmit={handleChange}>
          <TextField inputRef={inputRef} id="standard-basic" label="author" value={name} onChange={(e) => {
            console.log(e.target.value); setName(e.target.value)}}/>
          <TextField id="standard-basic" label="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
          <Button size="medium" style={{width: '120px'}} variant="contained" type="submit">Send</Button>
        </form>
    </Box>
  );
}

export default InputMessageBlock;
