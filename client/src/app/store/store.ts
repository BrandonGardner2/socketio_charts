import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/root-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false
  })
];

const store = configureStore({
  reducer: rootReducer,
  middleware
});

export type AppDispatch = typeof store.dispatch;
export default store;
