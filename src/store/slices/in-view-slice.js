import { createSlice } from '@reduxjs/toolkit';

const inViewSlice = createSlice({
  name: 'inView',
  initialState: 'home',
  reducers: {
    setInView: (_, action) => action.payload
  }
});

export const inViewReducer = inViewSlice.reducer;
export const { setInView } = inViewSlice.actions;
