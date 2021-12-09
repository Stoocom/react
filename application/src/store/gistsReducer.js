import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addAllGistsThunk = createAsyncThunk(
  'gists/addAllGistsThunk',
  async (_, { rejectWithValue }) => {
    console.log('addAllGistsThunk');
    try {
      const response = await fetch('https://api.github.com/gists/public');
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
)

let initialState = {
  error: null,
  isLoading: false,
  gists: null
}

export const gistsReducer = createSlice({
  name: 'gists',
  initialState,
  reducers: {},
  extraReducers: {
    [addAllGistsThunk.pending]: (state) => {
      console.log('pending');
      state.isLoading = true;
    },
    [addAllGistsThunk.fulfilled]: (state, { payload }) => {
      console.log('fulfilled');
      state.isLoading = false;
      state.error = null;
      state.gists = payload;
    },
    [addAllGistsThunk.rejected]: (state, action) => {
      console.log('rejected');
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

export default gistsReducer.reducer