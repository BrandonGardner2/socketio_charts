import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { toast } from 'react-toastify';

import Threshold from '../Threshold';
import { Provider } from 'react-redux';
import store from '../../../store/store';

const toastSpy = jest.spyOn(toast, 'error');

describe('Threshold tests', () => {
  test('it should render an input with a label for threshold that updates state', async () => {
    const na = 'N/A';
    const goodTestValue = '3';
    const badTestValue = '101';
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <Threshold />
      </Provider>
    );

    const submit = getByText(/set threshold/i);
    const clear = getByText(/clear threshold/i);
    const label = getByText(/threshold:/i);
    const input = getByLabelText(/threshold:/i) as HTMLInputElement;
    // Default State
    expect(input.value).toBeFalsy();
    expect(label.innerHTML).toContain(na);

    // Good Update
    input.value = goodTestValue;
    fireEvent.click(submit);
    expect(input.value).toBeFalsy();
    expect(label.innerHTML).toContain(goodTestValue);

    // Bad Update
    input.value = badTestValue;
    fireEvent.click(submit);
    expect(toastSpy).toHaveBeenCalledTimes(1);
    expect(input.value).toEqual(badTestValue);
    expect(label.innerHTML).toContain(goodTestValue);

    // Bad Update - Empty value
    input.value = '';
    fireEvent.click(submit);
    expect(toastSpy).toHaveBeenCalledTimes(2);
    expect(input.value).toEqual('');
    expect(label.innerHTML).toContain(goodTestValue);

    // Clear Threshold should remove threshold
    fireEvent.click(clear);
    expect(label.innerHTML).toContain(na);
  });
});
