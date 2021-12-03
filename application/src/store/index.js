import profileReducer from './profileReducer';
import dialogNamesListReducer from './dialogNamesListReducer';
import dialogMessagesListReducer from './dialogMessagesListReducer';
import { configureStore } from '@reduxjs/toolkit';

// const middleware = getDefaultMiddleware({
//   thunk: true,
// });

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    chats: dialogNamesListReducer,
    messages: dialogMessagesListReducer
  },
  //middleware,
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;