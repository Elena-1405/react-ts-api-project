import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  email: null,
  token: null,
  id: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.error = action.payload.error;
    },
    removeUser(state, action) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.error = action.payload.error;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
