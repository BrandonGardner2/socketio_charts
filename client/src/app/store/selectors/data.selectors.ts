import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../reducers/root-reducer';

const dataStateSelector = (state: RootState) => state.dataState;

const getDataSelector = createSelector(
  dataStateSelector,
  (dataState) => dataState.data
);

export default { getDataSelector };
