let initialState = {
  isShowName: false,
  name: "Alexander"
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SHOW':
      return {
        ...state,
        isShowName: !state.isShowName,
    }
    default:
      return state
  }
}
