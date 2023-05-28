import { configureStore } from '@reduxjs/toolkit';

import { windowWidthReducer } from './slices/window-width-slice';

export const store = configureStore({
  reducer: {
    windowWidth: windowWidthReducer
  }
});

export { updateWindowWidth } from './slices/window-width-slice';
