import profileReducer from './profileReducer';
import gistsReducer from './gistsReducer';
import dialogNamesListReducer from './dialogNamesListReducer';
import dialogMessagesListReducer from './dialogMessagesListReducer';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import {combineReducers} from "redux"; 
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
    profile: profileReducer,
    chats: dialogNamesListReducer,
    messages: dialogMessagesListReducer,
    gists: gistsReducer    
 });


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;