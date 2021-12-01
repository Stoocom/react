
let initialState = {
    isShowName: true,
    nameUser: "Alexander"
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'PROFILE::TOGGLE_SHOW':
      return {
        ...state,
        isShowName: !state.isShowName
    }
    case 'PROFILE::CHANGE_NAME': 
      return {
        ...state,
        nameUser: action.payload
      }
    default:
      return state
  }
}
