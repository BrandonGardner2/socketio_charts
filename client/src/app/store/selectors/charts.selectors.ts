import { createSelector } from '@reduxjs/toolkit';

import { ChartState } from './../reducers/charts/charts.reducer';
import { RootState } from '../reducers/root-reducer';

const chartStateSelector = (state: RootState): ChartState => state.chartState;

const getChartSelector = createSelector(
  chartStateSelector,
  (chartState) => chartState.type
);

export { getChartSelector };
