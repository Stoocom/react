import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import dialogNamesListReducer from './dialogNamesListReducer';
import dialogMessagesListReducer from './dialogMessagesListReducer';

const store = createStore(
  combineReducers({
    profile: profileReducer,
    chats: dialogNamesListReducer,
    messages: dialogMessagesListReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;