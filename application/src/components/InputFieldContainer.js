import React, { useState, useRef, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfile } from "../store/profileSelectors";
import store from "../store";
import { addMessageThunk } from '../store/dialogMessagesListReducer'
import InputField from'./InputField';

const useStyles = makeStyles({
  inputBlock: {
    marginTop: '20px',
    marginRight: '15px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

function InputFieldContainer() {
  const { nameUser } = useSelector(getProfile, shallowEqual);
  const [author, setAuthor] = useState(nameUser ? nameUser : "Default");
  const { chatsId } = useParams();
  const classes = useStyles();
  const inputRef = useRef(null);

  const [text, setMessage] = useState("");

  const handleChange = (e) => {
    
    store.dispatch(addMessageThunk({chatsId, text, author}));
    setMessage("");
    e.preventDefault();
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Box className={classes.inputBlock}>
        <InputField 
          handleChange={handleChange}
          nameUser={nameUser}
          author={author}
          setAuthor={setAuthor}
          inputRef={inputRef}
          text={text}
          setMessage={setMessage}
          nameInputText={"text"}
          buttomName={"Send"}
        />
    </Box>
  );
}

export default InputFieldContainer;
