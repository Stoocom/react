import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  message: { 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: '20px',
    color: 'rgb(70, 130, 130)',
    marginLeft: '10%'
  },
  message__title: {
    color: 'green',
    marginRight: '10px'
  }
});

function Message({ author, text }) {
  const classes = useStyles();
  return (
    <div className={classes.message}>
      <div className={classes.message__title}>{author}:</div>
      <span>{text}</span>  
    </div>
  );
}

export default Message;
