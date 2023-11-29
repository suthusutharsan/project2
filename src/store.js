import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/conter'
export const store = configureStore({
  reducer: { counter: counterReducer,},
});
