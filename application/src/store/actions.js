const SHOW_NAME_ACTION = "TOGGLE_SHOW";
const CHANGE_NAME_ACTION = "PROFILE::CHANGE_NAME";

export const showNameAction = {
  type: SHOW_NAME_ACTION
};

export const changeName = (name) => ({
  type: CHANGE_NAME_ACTION,
  payload: name
});