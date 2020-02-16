import { createSelector } from '@reduxjs/toolkit';

import { AlertState } from './../reducers/alerts/alerts.reducer';
import { RootState } from '../reducers/root-reducer';

const alertStateSelector = (state: RootState): AlertState => state.alertState;

const getThresholdSelector = createSelector(
  alertStateSelector,
  (alertState) => alertState.threshold
);

export { getThresholdSelector };
