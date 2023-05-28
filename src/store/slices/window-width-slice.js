import { createSlice } from '@reduxjs/toolkit';

const windowWidthSlice = createSlice({
  name: 'windowWidth',
  initialState: window.innerWidth,
  reducers: {
    updateWindowWidth: (_, action) => action.payload
  }
});

export const windowWidthReducer = windowWidthSlice.reducer;
export const { updateWindowWidth } = windowWidthSlice.actions;
