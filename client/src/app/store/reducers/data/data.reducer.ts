import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ChartData {
  value: number;
  timestamp: number;
}
export interface DataState {
  data: ChartData[];
}

const createInitialDataState = (): DataState => ({
  data: []
});

const dataSlice = createSlice({
  name: 'data',
  initialState: createInitialDataState(),
  reducers: {
    addData(state: DataState, action: PayloadAction<ChartData>) {
      state.data.push(action.payload);
    }
  }
});

const { actions, reducer: dataReducer } = dataSlice;

export { createInitialDataState };
export const { addData } = actions;
export default dataReducer;
