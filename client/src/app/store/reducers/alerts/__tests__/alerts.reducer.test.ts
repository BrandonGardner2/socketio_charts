import { AlertState } from './../alerts.reducer';

import alertReducer, {
  updateThreshold,
  createInitialAlertState
} from '../alerts.reducer';

describe('alert reducer', () => {
  let initialState: AlertState;
  beforeEach(() => {
    initialState = createInitialAlertState();
  });

  test('it should handle update threshold', () => {
    expect(initialState).toEqual({ threshold: undefined });

    const state = alertReducer(initialState, {
      type: updateThreshold.type,
      payload: 0
    });

    expect(state).not.toEqual(initialState);
    expect(state).toEqual({ threshold: 0 });

    const nextState = alertReducer(initialState, {
      type: updateThreshold.type,
      payload: undefined
    });

    expect(nextState).not.toEqual(state);
    expect(nextState).toEqual({ threshold: undefined });
  });
});
