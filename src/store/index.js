import { configureStore } from '@reduxjs/toolkit';

import { windowWidthReducer } from './slices/window-width-slice';
import { isScrollingReducer } from './slices/is-scrolling-slice';

export const store = configureStore({
  reducer: {
    windowWidth: windowWidthReducer,
    isScrolling: isScrollingReducer
  }
});

export { updateWindowWidth } from './slices/window-width-slice';
export { setIsScrolling } from './slices/is-scrolling-slice';
