import moment from 'moment';

import { DataState } from './../data.reducer';
import dataReducer, { addData, createInitialDataState } from '../data.reducer';

const mockData = {
  value: 1,
  timestamp: Date.now()
};

const mockUpdatedState = {
  data: [{ value: 1, key: moment(mockData.timestamp).format('H:mm:ss') }],
  perCategory: [
    { key: '-100 - -90', max: -90, min: -100, value: 0 },
    { key: '-90 - -80', max: -80, min: -90, value: 0 },
    { key: '-80 - -70', max: -70, min: -80, value: 0 },
    { key: '-70 - -60', max: -60, min: -70, value: 0 },
    { key: '-60 - -50', max: -50, min: -60, value: 0 },
    { key: '-50 - -40', max: -40, min: -50, value: 0 },
    { key: '-40 - -30', max: -30, min: -40, value: 0 },
    { key: '-30 - -20', max: -20, min: -30, value: 0 },
    { key: '-20 - -10', max: -10, min: -20, value: 0 },
    { key: '-10 - 0', max: 0, min: -10, value: 0 },
    { key: '0 - 10', max: 10, min: 0, value: 1 },
    { key: '10 - 20', max: 20, min: 10, value: 0 },
    { key: '20 - 30', max: 30, min: 20, value: 0 },
    { key: '30 - 40', max: 40, min: 30, value: 0 },
    { key: '40 - 50', max: 50, min: 40, value: 0 },
    { key: '50 - 60', max: 60, min: 50, value: 0 },
    { key: '60 - 70', max: 70, min: 60, value: 0 },
    { key: '70 - 80', max: 80, min: 70, value: 0 },
    { key: '80 - 90', max: 90, min: 80, value: 0 },
    { key: '90 - 100', max: 100, min: 90, value: 0 }
  ]
};

describe('data reducer', () => {
  let initialState: DataState;
  beforeEach(() => {
    initialState = createInitialDataState();
  });

  test('it should handle add data', () => {
    const state = dataReducer(initialState, {
      type: addData.type,
      payload: mockData
    });

    expect(state).not.toEqual(initialState);
    expect(state).toEqual(mockUpdatedState);
  });
});
