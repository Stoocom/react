import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Chats from './pages/Chats';
import Header from './components/Header';
import { Route, Routes, BrowserRouter } from "react-router-dom";

const Home = () => <div>Домашнаяя страница</div>;
const Profile = () => <div>Тут будет страница профайла</div>;

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

