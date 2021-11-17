import React, { useState } from 'react';
import './App.scss';
import Message from'./components/Message';

function App() {
  const [ text ] = useState('Сообщение которое можно отправить!');
  return (
    <div className="App">
      <h1>Вывод сообщений</h1>
       <Message text={text}/>
       <Message text={text}/>
       <Message text={text}/>
    </div>
  );
}

export default App;
