import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ref, push, set, onChildChanged, onChildAdded } from "firebase/database";
import { db } from '../firebase.js'

export const addMessageThunk = createAsyncThunk(
  'messages/addMessageThunk',
  async function ({chatsId, idNew, text, author}) {
    const postListRef = ref(db, "messages/" + chatsId);
    const newPostRef = push(postListRef);
    set(newPostRef, {
        id: idNew,
        author: author,
        text: text
    });
  }
)

const getPayloadFromSnapshot = (snapshot) => {
  const messages = [];
  snapshot.forEach((mes) => {
    messages.push(mes.val());
  });
  return { chatsId: snapshot.key, messages }
}

export const initMessageTrackingThunk = createAsyncThunk(
  'messages/initMessageTrackingThunk',
  async function (_, { dispatch }) {
    const messagesRef = ref(db, 'messages/');
    onChildAdded(messagesRef, (snapshot) => {
      const payload = getPayloadFromSnapshot(snapshot);
      dispatch(changeMessages(payload));
    });
    onChildChanged(messagesRef, (snapshot) => {
      const payload = getPayloadFromSnapshot(snapshot);
      console.log(payload);
      dispatch(changeMessages(payload));
    });
  }
)

let initialState = {
  isHowBotMessage: false,
  messages: {}
}

export const dialogMessagesListReducer = createSlice({
  name: 'dialogMessages',
  initialState,
  reducers: {
    changeMessages: (state, action) => {
      state.messages[action.payload.chatsId] = action.payload.messages
    },
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

export const { addMessage, changeMessages } = dialogMessagesListReducer.actions

export default dialogMessagesListReducer.reducer