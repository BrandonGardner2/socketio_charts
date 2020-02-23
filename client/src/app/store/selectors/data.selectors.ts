import { createSelector } from '@reduxjs/toolkit';

import { DataState, ChartData } from './../reducers/data/data.reducer';
import { RootState } from '../reducers/root-reducer';

const dataStateSelector = (state: RootState): DataState => state.dataState;

const getDataSelector = createSelector(
  dataStateSelector,
  (dataState) => dataState.data
);

const getPerCategorySelector = createSelector(
  dataStateSelector,
  (dataState) => dataState.perCategory
);

// This isn't ideal. Just being used for this challenge as I know what the values will be.
export enum Metrics {
  'Data Feed' = 'Data Feed',
  'Data Per Category' = 'Per Category'
}

const stateTranslations: { [key: string]: keyof DataState } = {
  [Metrics['Data Feed']]: 'data',
  [Metrics['Data Per Category']]: 'perCategory'
};

const getDataForMetricSelector = createSelector(
  dataStateSelector,
  (dataState) => (metric: Metrics): ChartData[] => {
    const key = stateTranslations[metric];
    return key ? dataState[key] || [] : [];
  }
);

export { getDataForMetricSelector, getDataSelector, getPerCategorySelector };
