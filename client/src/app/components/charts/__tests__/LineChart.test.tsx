import React from 'react';
import { render } from '@testing-library/react';

import LineChart from '../LineChart';

// Same issue referenced in App.test.tsx
// https://github.com/recharts/recharts/issues/727
const consoleSpy = jest
  .spyOn(global.console, 'warn')
  .mockImplementation(() => null);

const mockData = [{ key: 'mock', value: 1 }];

describe('Line chart tests', () => {
  test('it should render a line chat with or without data', () => {
    const { rerender } = render(<LineChart data={mockData} />);
    rerender(<LineChart data={[]} />);

    consoleSpy.mockRestore();
  });
});
