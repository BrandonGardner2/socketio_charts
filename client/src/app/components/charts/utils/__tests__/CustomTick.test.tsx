import React from 'react';
import { render } from '@testing-library/react';

import CustomTick from '../CustomTick';

const mockProps = {
  x: 1,
  y: 1,
  payload: {
    value: 'mock'
  }
};

describe('Custom Tick tests', () => {
  test('Should return a custom tick', () => {
    const { container } = render(
      <svg>
        <CustomTick {...mockProps} />
      </svg>
    );

    const g = container.querySelector('g');
    expect(g).toHaveAttribute(
      'transform',
      `translate(${mockProps.x},${mockProps.y})`
    );

    const text = container.querySelector('text');
    expect(text?.innerHTML).toEqual(mockProps.payload.value);
  });
});
