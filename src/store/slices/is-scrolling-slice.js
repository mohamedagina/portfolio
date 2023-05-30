import { createSlice } from '@reduxjs/toolkit';

const isScrollingSlice = createSlice({
  name: 'isScrolling',
  initialState: false,
  reducers: {
    setIsScrolling: (_, action) => action.payload
  }
});

export const isScrollingReducer = isScrollingSlice.reducer;

export const { setIsScrolling } = isScrollingSlice.actions;
