import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const async_func = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000)
  });
} 

export const addMessageThunk = createAsyncThunk(
  'messages/addMessageThunk',
  async function ({chatsId, text, author}, { dispatch }) {
    await async_func();
    dispatch(addMessage({chatsId, text, author}));
  }
)


let initialState = {
  isHowBotMessage: false,
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
  },
  extraReducers: {
    [addMessageThunk.pending]: (state) => {
      state.isHowBotMessage = true;
    },
    [addMessageThunk.fulfilled]: (state) => {
      state.isHowBotMessage = false;
    }
  }
})

export const { addMessage } = dialogMessagesListReducer.actions

export default dialogMessagesListReducer.reducer