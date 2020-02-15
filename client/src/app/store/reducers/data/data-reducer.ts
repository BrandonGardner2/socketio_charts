import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  data: number[];
}

const createInitialDataState = (): DataState => ({
  data: []
});

const dataSlice = createSlice({
  name: 'data',
  initialState: createInitialDataState(),
  reducers: {}
});

const { actions, reducer: dataReducer } = dataSlice;

export { createInitialDataState };
export const {} = actions;
export default dataReducer;
