import { ChartState } from './reducers/charts/charts.reducer';
import { PersistConfig } from 'redux-persist/lib/types';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { AlertState } from './reducers/alerts/alerts.reducer';

const persistAlertConfig: PersistConfig<AlertState> = {
  key: 'alert',
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const persistChartConfig: PersistConfig<ChartState> = {
  key: 'charts',
  storage: storage,
  stateReconciler: autoMergeLevel2
};

export { persistAlertConfig, persistChartConfig };
