import React, { useState, useCallback } from 'react';
import { Container, Box, Typography, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
//import { connect } from 'react-redux';
import { useSelector, shallowEqual } from "react-redux";
import { showNameAction, changeName }  from "../store/actions";
import store from "../store";
import { getProfile } from "../store/profileSelectors";

function Profile() {
  const { isShowName, nameUser } = useSelector(getProfile, shallowEqual);
  const [value, setValue] = useState('');

  const handleChange = () => {
    store.dispatch(showNameAction());
  };

  const inputChangeValue = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const setName = useCallback(() => {
    store.dispatch(changeName(value));
  }, [value]);

  return (
    <Container style={{ margin: "0 auto", maxWidth: 800, padding: 0 }}>
    <Typography style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', padding: 0, width: '100%' }} component="div">
      <Box component={'h2'} sx={{
            width: "100%",
            backgroundColor: '#f0eeef',
            marginTop: '20px',
            borderRadius: '5px',
            }}>
          <Box style={{ padding: "10px" }}>Profile information</Box>
      </Box>
      <Box sx={{
            width: "100%",
            backgroundColor: '#f0eeef',
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
            borderRadius: 5,
            color: 'rgb(213, 114, 118)'
          }}>
        <Box sx={{
            padding: "10px",
            width: "50%",
            backgroundColor: '#f0eeef',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '100%',
            borderRadius: '5px',
            color: 'rgb(213, 114, 118)'
          }}>
          <Box sx={{
            width: "40%",
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            borderRadius: 5,
            padding: "10px",
            backgroundColor: 'rgb(213, 114, 118)'
          }}>
          Name:
          </Box>
          <Box sx={{
            width: "40%",
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            borderRadius: '5px',
            padding: "10px",
            color: 'rgb(213, 114, 118)'
          }}>
          { isShowName ? nameUser : "-"}
          </Box>
      </Box>
      <Box sx={{
            width: "40%",
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            wrap: 'center',
            borderRadius: '0px',
            padding: "10px",
            color: 'rgb(213, 114, 118)'
          }}>
            <FormGroup style={{ flexDirection: 'row',  width: "50%", marginLeft: '20px',}}>
              <FormControlLabel control={<Checkbox checked={isShowName} onChange={handleChange} />} label="Show name" />
            </FormGroup>
          </Box>



        </Box>
        <Box component={'h2'} sx={{
            width: "100%", backgroundColor: '#f0eeef', marginTop: '20px',
            borderRadius: '5px',
            display: 'flex', justifyContent: 'start', flexDirection: 'row'
          }}>
          <div style= {{ width: "20%" }}>
              <input type="text"onChange={inputChangeValue} />
            </div>
            <div style= {{ width: "20%" }}s>
              <button onClick={setName}>Change Name</button>
            </div>
      </Box>


    </Typography>
  </Container>
  );
}

export default Profile
