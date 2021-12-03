import React, {useState} from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from "@material-ui/core";
import store from "../store";
import { getChatsName } from "../store/chatsSelectors";
import { addChat, removeChat } from '../store/dialogNamesListReducer'

const useStyles = makeStyles({
  chats: {
    display: 'flex',
    justifyContent: 'start',
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  },
  inputBlock: {
    marginTop: '10px',
    marginRight: '20px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  formStyle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: "42px"
  }
});

function ChatList() {
  const navigate = useNavigate();
  const { dialogs } = useSelector(getChatsName, shallowEqual);
  const classes = useStyles();
  const { chatsId } = useParams();
  const [chatName, setChatName] = useState("");

  const deleteChat = (e) => {
    store.dispatch(removeChat(e.target.parentElement.id));
    if (chatsId === e.target.parentElement.id) {
      navigate('/chats');
    }
  }

  const createChat = (e) => {
    store.dispatch(addChat(chatName));
    e.preventDefault();
  }

  return (
    <Box className={classes.chats}>
        { dialogs.map( (item, index) => {
        return (
          <Box style={{ display: "flex", margin: "5%",
            color: item.id === chatsId ? "#65b2c6" : "#c0cccc",
            textDecoration: 'none', width: '100%'
          }} key={index}>
            <Link underline='hover'
              style={{ 
                display: "block", 
                margin: "1rem 2rem",
                color: item.id === chatsId ? "#65b2c6" : "#c0cccc",
                textDecoration: 'none',
                width: '30%'
              }}
              to={`/chats/${item.id}`}
              key={`id${item.id}`}
            >
              {item.name}
            </Link>
            <Box>
              <IconButton key={`idDel${item.id}`} aria-label="default">
                <DeleteIcon id={item.id} onClick={deleteChat}/>
              </IconButton>
            </Box>
          </Box>
        )
        })
        }
        <Box className={classes.inputBlock}>
          <form className={classes.formStyle} noValidate autoComplete="off" onSubmit={createChat}>
            <TextField size="small" style={{ marginLeft: '20px', width: '120px' }} id="standard-basic" label="chat name" value={chatName} onChange={(e) => setChatName(e.target.value)}/>
            <Button size="small" style={{width: '100px', marginRight: '10px'}} variant="contained" type="submit">New Chat</Button>
          </form>
      </Box>
    </Box>  
  );
}

export default ChatList;
