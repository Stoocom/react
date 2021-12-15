import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  email: null,
  token: null,
  id: null
};

export const userReducer = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser: (state) => {
      console.log(" Methods removeUser");
      state.email = null;
      state.token = null;
      state.id = null;  
    }
  }
});

export const { addUser, removeUser } = userReducer.actions;

export default userReducer.reducer;