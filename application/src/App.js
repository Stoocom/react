import React, { useState, useEffect } from 'react';
import './App.scss';
import Message from'./components/Message';

function App() {

  const [ messageList, addMessageList ] = useState([]);
  const [ lastAuthor, setLastAuthor ] = useState('');
  const [ isShowAnswerBot, setShowAnswerBot ] = useState(false);
  
  useEffect(() => {
    if (lastAuthor) {
      setShowAnswerBot(true);
      setTimeout(() => {
        setShowAnswerBot(false);
      },1500);
    }
  }, [lastAuthor]);

  function handleSubmit(event) {
    addMessageList([ {
      author: event.target[0].value,
      text: event.target[1].value
    }, ...messageList ]);
    setLastAuthor(event.target[0].value);
    event.preventDefault();
  }
  
  return (
    <div className="app">
      <h1>Вывод сообщений</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Имя: <input 
                type="text" 
                name="author"
              />
        </label>
        <label>
          Сообщение:  <input 
                        type="text"
                        name="text"
                      />
        </label>
        <input type="submit" value="Отправить" />
      </form>
      { isShowAnswerBot 
        ? <div>
            <span>{lastAuthor}</span>
            <span>Ваш запрос принят! Пожалуйста, ждите ответа!</span>
          </div>
        : <div></div> }
      { messageList.map( ({ author, text }, index) =>
        <Message
          key={index}
          author={author} 
          text={text}
        />
      )}
    </div>
  );
}

export default App;
