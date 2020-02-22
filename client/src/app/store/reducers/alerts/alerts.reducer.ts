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
    updateThreshold(
      state: AlertState,
      action: PayloadAction<number | undefined>
    ): void {
      state.threshold = action.payload;
    }
  }
});

const { actions, reducer: alertReducer } = alertSlice;

export { createInitialAlertState };
export const { updateThreshold } = actions;
export default alertReducer;
