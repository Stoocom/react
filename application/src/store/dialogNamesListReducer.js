import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  dialogs: [ 
    {
      id: "id1",
      name: "nameChat11"
    },
    {
      id: "id2",
      name: "nameChat22"
    },
  ]
}

export const dialogNamesListReducer = createSlice({
  name: 'chatNames',
  initialState,
  reducers: {
    addChat: (state, action) => {
      state.dialogs.push({ 
        id: `id${state.dialogs.length+1}`,
        name: action.payload
      })
    },
    removeChat: (state, action) => {
      state.dialogs = state.dialogs.filter( item => item.id !== action.payload )
    },
  },
})

export const { addChat, removeChat } = dialogNamesListReducer.actions

export default dialogNamesListReducer.reducer
