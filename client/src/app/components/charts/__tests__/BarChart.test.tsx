import React from 'react';
import { render } from '@testing-library/react';

import BarChart from '../BarChart';

// Same issue referenced in App.test.tsx
// https://github.com/recharts/recharts/issues/727
const consoleSpy = jest
  .spyOn(global.console, 'warn')
  .mockImplementation(() => null);

const mockData = [{ key: 'mock', value: 1 }];

describe('Bar chart tests', () => {
  test('it should render a bar chat with or without data', () => {
    const { rerender } = render(<BarChart data={mockData} />);
    rerender(<BarChart data={[]} />);

    consoleSpy.mockRestore();
  });
});
