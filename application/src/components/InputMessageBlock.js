import React, { useState, useRef, useEffect } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMessage, addMessageWithThunk }  from "../store/actions";
import store from "../store";

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

// const addMessageWithThunk = (chatsId, text, author) => (dispatch) => {
//   console.log('Выполняется код 2');
//   dispatch(addMessage(chatsId, text, author));
//   if (author !== "Default") {
//     console.log('Выполняется код 3');
//      setTimeout((chatsId, text, author) => dispatch(addMessage({ chatsId, text, author })), 2000);
//   }
// }

function InputMessageBlock() {
  const { nameUser } = useSelector((state) => state.profile);
  const { chatsId } = useParams();
  const classes = useStyles();

  const [author, setAuthor] = useState("");
  const [text, setMessage] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    console.log('Выполняется код 1');
    store.dispatch(addMessage(chatsId, text, author));
    store.dispatch(addMessageWithThunk(chatsId, text, author));
    // console.log(author, text);
    // if (nameUser !== "Default") {
    //   store.dispatch(addMessage(chatsId, text, nameUser));
    // } else {
    //   console.log("We here");
    //   //store.dispatch(addMessage(chatsId, text, author))
    //   setMessage("Вам пишет бот");
    //   setAuthor("Bot");
    //   setTimeout(() => {
    //     console.log(chatsId, text, author);
    //     store.dispatch(addMessage({ chatsId, text, author }));
    //   }, 1500);
      //store.dispatch(addMessage(chatsId, text, author));
    //}
    setAuthor("");
    setMessage("");
    inputRef.current.focus();
    e.preventDefault();
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Box className={classes.inputBlock}>
        <form className={classes.formStyle} noValidate autoComplete="off" onSubmit={handleChange}>
          { (nameUser !== "Default")
              ? <div></div>
              : <TextField id="standard-basic" label="author" value={author} onChange={(e) => { setAuthor(e.target.value) }} />
            }
          <TextField inputRef={inputRef} id="standard-basic" label="text" value={text} onChange={(e) => setMessage(e.target.value)}/>
          <Button size="medium" style={{width: '120px'}} variant="contained" type="submit">Send</Button>
        </form>
    </Box>
  );
}

export default InputMessageBlock;
