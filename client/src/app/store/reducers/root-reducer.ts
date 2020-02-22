import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { persistAlertConfig } from '../persist-config';
import alertReducer from './alerts/alerts.reducer';
import dataReducer from './data/data.reducer';

const rootReducer = combineReducers({
  alertState: persistReducer(persistAlertConfig, alertReducer),
  dataState: dataReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
