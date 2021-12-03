import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import profileReducer from './profileReducer';
import dialogNamesListReducer from './dialogNamesListReducer';
import dialogMessagesListReducer from './dialogMessagesListReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    profile: profileReducer,
    chats: dialogNamesListReducer,
    messages: dialogMessagesListReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
)

export default store;