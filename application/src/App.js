import React, { useState, useRef, useEffect } from 'react';
//import './App.scss';
import { TextField, Button, Box } from '@material-ui/core';
import { List, ListItem, ListItemText } from "@material-ui/core";
import Message from'./components/Message';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  main: {
    maxWidth: '900px',
    margin: '0 auto',
    height: '100%'
  },
  inputBlock: {
    display: 'flex',
    justifyContent: 'end',
    flexDirection: 'row'
  },
  formStyle: {
    width: '70%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  chatsBlock: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    height: '100%'
  },
  messages: {
    backgroundColor: 'lightgrey',
    marginTop: '20px',
    marginLeft: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%'
  },
  chats: {
    backgroundColor: 'lightcoral',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'start',
    flexDirection: 'column',
    height: '100vh'
  }
});

const lists = [
  {id: "dsaddfd", title: 'BadBoss'},
  {id: "sdfdccvvffd", title: 'CuteGirl'},
  {id: "sdcxcxfdffd", title: 'Trash'},
  {id: "sdsaaafdffd", title: 'Spam'}
];

const Image = ({ children }) => {
  return <div>{children("imageWrapper")}</div>;
 };

function App() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [ messagesList, setMessageList ] = useState([]);
  const inputRef = useRef(null);

  function handleChange(event) {
    setMessageList([ { name: name, message: message }, ...messagesList ]);
    setName("");
    setMessage("");
    inputRef.current.focus();
    event.preventDefault();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={classes.main}>
      <Image>
        {(className) => (
          <div className={className}>
            <img src="none" alt="none" />
          </div>
        )}
      </Image>
      <Box className={classes.inputBlock}>
        <form className={classes.formStyle} noValidate autoComplete="off" onSubmit={handleChange}>
          <TextField inputRef={inputRef} id="standard-basic" label="Имя" value={name} onChange={(e) => {setName(e.target.value)}}/>
          <TextField id="standard-basic" label="Сообщение" value={message} onChange={(e) => setMessage(e.target.value)}/>
          <Button size="medium" style={{width: '150px'}} variant="contained" type="submit">Send</Button>
        </form>
      </Box>
      <Box className={classes.chatsBlock}>
        <Box className={classes.chats}>
        <nav aria-label="secondary mailbox folders">
        <List>
          { lists.map( ({ id, title }) =>
            <ListItem key={id}>
              <ListItemText primary={title} />
            </ListItem>)
          }
        </List>
      </nav>
        </Box>
        <div className={classes.messages}>
          <h2>Сообщения</h2>
        { messagesList.map( ({ name, message }, index) =>
          <Message
            key={index}
            author={name} 
            text={message}
          />
      )}
        </div>
      </Box>
    </div>
  );
}

export default App;
