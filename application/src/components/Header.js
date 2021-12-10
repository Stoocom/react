import React from 'react';
import { AppBar, Box, Toolbar } from '@material-ui/core';
import { Typography, ListItem } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const { nameUser } = useSelector((state) => state.profile);
  return (
      <AppBar position="static" style={{ background: '#d57276' }} >
        <Toolbar style={{ minHeight: 40, background: '#d57276', margin: "auto",
                          maxWidth: 800, width: "100%", padding: 0 }}>
          <Box sx={{ width: '30%', display: 'flex', justifyContent: 'start' }}>
            Logo
          </Box >
          <Box sx={{ width: '40%'}} align="center">
          <Typography style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', padding: 0, width: 'none' }} variant="h6" component="ul">
              <ListItem style={{ width: "100%", display: 'flex', justifyContent: 'center'}} button component={Link} to="/">Home</ListItem>
              <ListItem style={{ width: "100%", display: 'flex', justifyContent: 'center'}} button component={Link} to="/gists">Gifts</ListItem>
              <ListItem style={{ width: "100%", display: 'flex', justifyContent: 'center'}} button component={Link} to="/chats">Chats</ListItem>
              <ListItem style={{ width: "100%", display: 'flex', justifyContent: 'center'}} button component={Link} to="/profile">Profile</ListItem>
          </Typography>
          </Box>
          <Box sx={{ width: '30%', display: 'flex', justifyContent: 'end' }}>
            { nameUser === "Default" ? "icon" : nameUser }
          </Box >
        </Toolbar>
      </AppBar>
  );
}

export default Header;
