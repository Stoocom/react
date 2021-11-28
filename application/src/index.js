import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Chats from './pages/Chats';
import Profile from './pages/Profile';
import Header from './components/Header';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux'
import profileReducer from "./store/profileReducer";

let store = createStore(
  profileReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const Home = () => <div>Домашнаяя страница</div>;
// const store = createStore(profileReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="chats" element={<Chats />} />
          <Route path="chats/:chatsId" element={<Chats />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

