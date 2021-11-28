import React from 'react';
import { Container, Box, Typography, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
//import { toggleShowName }  from "../store/actions";

function Profile(props) {
  console.log(props);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch({ type: 'TOGGLE_SHOW' });
  };

  return (
    <Container style={{ margin: "0 auto", maxWidth: 800, padding: 0 }}>
    <Typography style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', padding: 0, width: '100%' }} component="div">
      <Box component={'h2'} sx={{
            width: "100%",
            backgroundColor: '#f0eeef',
            marginTop: '20px',
            borderRadius: '5px',
            padding: "20px"
          }}>
          Profile information
      </Box>
      <Box sx={{
            width: "100%",
            backgroundColor: '#f0eeef',
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
            borderRadius: '5px',
            padding: "20px",
            color: 'rgb(213, 114, 118)'
          }}>
        <Box sx={{
            width: "50%",
            backgroundColor: '#f0eeef',
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
            borderRadius: '5px',
            color: 'rgb(213, 114, 118)'
          }}>
          <Box sx={{
            width: "40%",
            color: 'white',
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            borderRadius: '5px',
            padding: "10px",
            backgroundColor: 'rgb(213, 114, 118)'
          }}>
          Name:
          </Box>
          <Box sx={{
            width: "40%",
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            borderRadius: '5px',
            padding: "10px",
            color: 'rgb(213, 114, 118)'
          }}>
          { props.isShow.isShowName ? props.isShow.name : "-"}
          </Box>
      </Box>
      <Box sx={{
            width: "30%",
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '5px',
            padding: "10px",
            color: 'rgb(213, 114, 118)'
          }}>
            <FormGroup style={{ flexDirection: 'row'}}>
              <FormControlLabel control={<Checkbox checked={props.isShow.isShowName} onChange={handleChange} />} label="Show name" />
            </FormGroup>
          </Box>
        </Box>
    </Typography>
    </Container>
  );
}

export default connect(state => ({isShow: state}))(Profile)
