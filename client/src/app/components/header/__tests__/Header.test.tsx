import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import Header from '../Header';
import store from '../../../store/store';

describe('Header tests', () => {
  test("it should render with Corva's logo", () => {
    // In practice this would probably be a variable from somewhere else.
    const corvaUrl =
      'https://www.corva.ai/wp-content/themes/corva/framework/dist/images/corva-logo.png';
    const { container } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const img = container.querySelector('img');
    expect(img).toHaveAttribute('src', corvaUrl);
  });

  test('it should render with my information', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    getByText(/brandon gardner - take home challenge/i);
  });

  // I am doing more testing of threshold in threshold.test
  // I can simply check that anything from threshold exists here.
  test('it should render the threshold component', () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(getAllByText(/threshold/i).length).toBeGreaterThan(0);
  });
});
