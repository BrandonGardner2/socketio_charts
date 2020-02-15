import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AlertState {
  threshold: number | undefined;
}

const createInitialAlertState = (): AlertState => ({
  threshold: undefined
});

const alertSlice = createSlice({
  name: 'alerts',
  initialState: createInitialAlertState(),
  reducers: {
    setThreshold(state: AlertState, action: PayloadAction<number>) {
      state.threshold = action.payload;
    }
  }
});

const { actions, reducer: alertReducer } = alertSlice;

export { createInitialAlertState };
export const { setThreshold } = actions;
export default alertReducer;
