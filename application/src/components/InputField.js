import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  formStyle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});

function InputField({ author, setAuthor, nameUser, handleChange, inputRef, text, setMessage, nameInputText, buttomName }) {
  const classes = useStyles();
  
  return (
      <form className={classes.formStyle} noValidate autoComplete="off" onSubmit={handleChange}>
          { (nameUser !== "Default" || author === "No")
              ? <div></div>
              : <TextField id="standard-basic" label="author" value={author} onChange={(e) => { setAuthor(e.target.value) }} />
            }
          { inputRef
              ? <TextField id="standard-basic" label={nameInputText} value={text} onChange={(e) => setMessage(e.target.value)}/>
              : <TextField style={{width: '100px'}}inputRef={inputRef} id="standard-basic" label={nameInputText} value={text} onChange={(e) => setMessage(e.target.value)}/>
          }
          <Button size="medium" style={{width: '100px', marginRight: '15px'}} variant="contained" type="submit">{buttomName}</Button>
      </form>
  );
}

export default InputField;
