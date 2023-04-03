import { configureStore } from '@reduxjs/toolkit';
import form from '../features/articlesForm/ArticlesFormSlice'


export const store = configureStore({
  reducer: {
    form 
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
