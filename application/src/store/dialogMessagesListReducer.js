
let initialState = {
  messages: { 
    "id1": [
      {
        id: "aaa3332",
        text: "chat1text",
        author: "Bob"
      },
      {
        id: "aaa33323",
        text: "chat1text",
        author: "Maria"
      },
    ],
    "id2": [
      {
        id: "ddd4332",
        text: "chat2text",
        author: "Bob"
      },
      {
        id: "ddd33323",
        text: "chat2text",
        author: "Maria"
      },
    ]
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "MESSAGES::ADD_MESSAGE":
      const currentList = state.messages[action.chatsId] || [];
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.chatsId]: [
            ...currentList,
            {
              id: `${action.chatsId}${currentList.length}`,
              text: action.text,
              author: action.author
            }
          ]
        }
      };
    default:
      return state
  }
}
