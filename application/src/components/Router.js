import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from './Header';
import HomePage from '../pages/HomePage';
import Chats from '../pages/Chats';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Gists from '../pages/Gists';
import Profile from '../pages/Profile';
import PrivateRoute from '../hocs/PrivateRoute';
import PublicRoute from '../hocs/PublicRoute';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          } />
        <Route exact path="chats" element={
            <PrivateRoute>
              <Chats />
            </PrivateRoute>
          } />
        <Route exact path="gists" element={
          <PublicRoute>
              <Gists />
          </PublicRoute>
          } />
        <Route exact path="chats/:chatsId" element={       
            <PrivateRoute>
              <Chats />
            </PrivateRoute>
          } />
        <Route exact path="profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
        <Route exact path="login" element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } />
        <Route exact path="signup" element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          } />
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main> 
        } />
    </Routes>
  </BrowserRouter>
  );
}

export default Router;
