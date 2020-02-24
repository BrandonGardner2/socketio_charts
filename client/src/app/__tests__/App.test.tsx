import React from 'react';
import { render } from '@testing-library/react';
import store from '../store/store';
import App from '../App';
import { Provider } from 'react-redux';

jest.mock('../network/socketio.hook');

// There is a issue with Recharts not recognizing responsive container
// height in a Node environment. I am spying on console warn just to
// beat it. Planning to look into bypassing this later, as GitHub / SO
// didn't provide many answers.
// https://github.com/recharts/recharts/issues/727
const consoleSpy = jest
  .spyOn(global.console, 'warn')
  .mockImplementation(() => null);

test('it renders with the default redux store', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  consoleSpy.mockRestore();
});
