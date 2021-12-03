import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  isShowName: true,
  nameUser: "Alexander"
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    showNameProfile: (state) => {
      state.isShowName = !state.isShowName;
    },
    changeNameProfile: (state, action) => {
      console.log(action);
      state.nameUser = action.payload;
    },
    
  },
})

export const { showNameProfile, changeNameProfile } = profileSlice.actions

export default profileSlice.reducer
