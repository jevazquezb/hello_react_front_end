import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions
const FETCH_GREETING = 'hello_world_react/FETCH_GREETING';

// API directory(URL)
const apiUrl = 'http://localhost:3001/api/v1/greetings';

// Async function (Function Action Creator)
const fetchGreetAsync = createAsyncThunk(
  FETCH_GREETING,
  async () => {
    const response = await fetch(apiUrl);
    const output = await response.text();
    return output;
  },
);

const initialState = '';

// Reducer
const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: {
    [fetchGreetAsync.fulfilled]: (state, action) => (
      action.payload
    ),
  },
});

export { fetchGreetAsync };

export default greetingSlice.reducer;
