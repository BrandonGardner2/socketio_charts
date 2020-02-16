import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/root-reducer';
import { persistStore } from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false
  })
];

const store = configureStore({
  reducer: rootReducer,
  middleware
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export default store;
