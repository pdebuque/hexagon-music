import { configureStore } from '@reduxjs/toolkit';
import stateReducer from './reducers/state.reducer';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    state: stateReducer,
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch