import { combineReducers } from 'redux';
import dataReducer from './data/data-reducer';

const rootReducer = combineReducers({
  dataState: dataReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
