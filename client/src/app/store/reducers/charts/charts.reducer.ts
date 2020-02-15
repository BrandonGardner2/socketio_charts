import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ChartType {
  BAR = 'BAR',
  LINE = 'LINE'
}

export interface ChartState {
  type: ChartType;
}

const createInitialChartState = (): ChartState => ({
  type: ChartType.BAR
});

const chartSlice = createSlice({
  name: 'charts',
  initialState: createInitialChartState(),
  reducers: {
    setChartType(state: ChartState, action: PayloadAction<ChartType>) {
      state.type = action.payload;
    }
  }
});

const { actions, reducer: chartReducer } = chartSlice;

export { createInitialChartState };
export const { setChartType } = actions;
export default chartReducer;
