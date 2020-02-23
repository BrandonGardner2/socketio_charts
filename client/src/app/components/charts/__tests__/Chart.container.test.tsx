import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import ChartContainer from '../Chart.container';
import { mockMetrics } from '../../dashboard/Dashboard';
import store from '../../../store/store';

// Same issue referenced in App.test.tsx
// https://github.com/recharts/recharts/issues/727
const consoleSpy = jest
  .spyOn(global.console, 'warn')
  .mockImplementation(() => null);

// Ideally, in these tests I would like to query for recharts-bar and recharts-line.
// However, due to the size issue referenced above recharts does not render the charts in a Node environment.
// I will correct these cases if time permits.
describe('Chart container tests', () => {
  afterAll(() => {
    consoleSpy.mockRestore();
  });

  test('it should render a chart for data per category', () => {
    const { container } = render(
      <Provider store={store}>
        <ChartContainer
          metric={mockMetrics[1].metric}
          chartType={mockMetrics[1].chartType}
        />
      </Provider>
    );

    const barChart = container.querySelector('.recharts-responsive-container');
    expect(barChart).not.toBeNull();
  });

  test('it should render a chart for data feed', () => {
    const { container } = render(
      <Provider store={store}>
        <ChartContainer
          metric={mockMetrics[0].metric}
          chartType={mockMetrics[0].chartType}
        />
      </Provider>
    );

    const lineChart = container.querySelector('.recharts-responsive-container');
    expect(lineChart).not.toBeNull();
  });
});
