import { configureStore } from '@reduxjs/toolkit';

import { windowWidthReducer } from './slices/window-width-slice';
import { inViewReducer } from './slices/in-view-slice';

export const store = configureStore({
  reducer: {
    windowWidth: windowWidthReducer,
    inView: inViewReducer
  }
});

export { updateWindowWidth } from './slices/window-width-slice';
export { setInView } from './slices/in-view-slice';
