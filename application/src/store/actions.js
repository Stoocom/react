const SHOW_NAME_ACTION = "PROFILE::TOGGLE_SHOW";
const PROFILE_CHANGE_NAME_ACTION = "PROFILE::CHANGE_NAME";
const DIALOGS_ADD_CHAT = "DIALOGS:ADD_CHAT";
const DIALOGS_REMOVE_CHAT = "DIALOGS:REMOVE_CHAT";
const MESSAGES_ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const showNameAction = () => ({
  type: SHOW_NAME_ACTION
});

export const changeName = (name) => ({
  type: PROFILE_CHANGE_NAME_ACTION,
  payload: name
});

export const addChat = (name) => ({
  type: DIALOGS_ADD_CHAT,
  name
});

export const removeChat = (chatsId) => ({
  type: DIALOGS_REMOVE_CHAT,
  chatsId
});

export const addMessage = (chatsId, text, author) => ({
  type: MESSAGES_ADD_MESSAGE,
  chatsId,
  text,
  author
});