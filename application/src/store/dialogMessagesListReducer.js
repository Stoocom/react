import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  counter: 0,
  messages: { 
    "id1": [
      {
        id: "aaa3332",
        text: "chat1text",
        author: "Bob"
      },
      {
        id: "aaa33323",
        text: "chat1text",
        author: "Maria"
      },
    ],
    "id2": [
      {
        id: "ddd4332",
        text: "chat2text",
        author: "Bob"
      },
      {
        id: "ddd33323",
        text: "chat2text",
        author: "Maria"
      },
    ]
  }
}

export const dialogMessagesListReducer = createSlice({
  name: 'dialogMessages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      if (state.messages[action.payload.chatsId]) {
        state.messages[action.payload.chatsId].push({
            id: `${action.payload.chatsId}${state.messages[action.payload.chatsId].length}`,
            text: action.payload.text,
            author: action.payload.author
          })      
      } else {
        state.messages[action.payload.chatsId] = [
          { 
            id: `${action.payload.chatsId}${[].length}`,
            text: action.payload.text,
            author: action.payload.author
          }
        ]
      }
    }
  }
})

export const { addMessage } = dialogMessagesListReducer.actions

export default dialogMessagesListReducer.reducer