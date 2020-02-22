import { createSelector } from '@reduxjs/toolkit';

import { DataState } from './../reducers/data/data.reducer';
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

export { getDataSelector, getPerCategorySelector };