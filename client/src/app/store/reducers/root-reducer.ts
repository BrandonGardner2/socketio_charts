import { combineReducers } from 'redux';

import alertReducer from './alerts/alerts.reducer';
import dataReducer from './data/data.reducer';
import chartReducer from './charts/charts.reducer';

const rootReducer = combineReducers({
  alertState: alertReducer,
  chartState: chartReducer,
  dataState: dataReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
