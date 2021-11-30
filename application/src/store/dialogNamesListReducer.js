
let initialState = {
  dialogs: [ 
    {
      id: "id1",
      name: "nameChat1"
    },
    {
      id: "id2",
      name: "nameChat2"
    },
  ]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "DIALOGS:ADD_CHAT":
      console.log('Добавление чата');
      console.log(action);
      return {
        ...state,
        dialogs: [
          ...state.dialogs,
          {
            id: `id${state.dialogs.length+1}`,
            name: action.name,
          },
        ],
      };
    case "DIALOGS:REMOVE_CHAT":
      return {
        ...state,
        dialogs: state.dialogs.filter( item => item.id !== action.chatsId ),
      };
    default:
      return state
  }
}
