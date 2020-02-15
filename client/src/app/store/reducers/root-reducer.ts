import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { persistAlertConfig, persistChartConfig } from '../persist-config';
import alertReducer from './alerts/alerts.reducer';
import dataReducer from './data/data.reducer';
import chartReducer from './charts/charts.reducer';

const rootReducer = combineReducers({
  alertState: persistReducer(persistAlertConfig, alertReducer),
  chartState: persistReducer(persistChartConfig, chartReducer),
  dataState: dataReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
