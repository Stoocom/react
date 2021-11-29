
let initialState = {
  isShowName: true,
  name: "Default"
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SHOW':
      return {
        ...state,
        isShowName: !state.isShowName,
    }
    case 'PROFILE::CHANGE_NAME': 
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}
