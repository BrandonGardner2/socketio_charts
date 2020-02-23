import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import Dashboard from '../Dashboard';
import store from '../../../store/store';
import { Metrics } from '../../../store/selectors/data.selectors';

// Same issue referenced in App.test.tsx
// https://github.com/recharts/recharts/issues/727
const consoleSpy = jest
  .spyOn(global.console, 'warn')
  .mockImplementation(() => null);

describe('Dashboard tests', () => {
  test('it should render the dashboard with a header and two metric charts', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    getByText(/brandon gardner - take home challenge/i);
    getByText(new RegExp(Metrics['Data Feed'], 'i'));
    getByText(new RegExp(Metrics['Data Per Category'], 'i'));

    consoleSpy.mockRestore();
  });
});
