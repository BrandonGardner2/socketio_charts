import { renderHook, act } from '@testing-library/react-hooks';
import * as useSocketService from '../socketio.service';
import useDataSocket from '../socketio.hook';

jest.mock('react-redux', () => {
  return {
    useDispatch: jest.fn()
  };
});

const consoleSpy = jest
  .spyOn(global.console, 'log')
  .mockImplementation(jest.fn());
const serviceSpy = jest
  .spyOn(useSocketService, 'default')
  .mockImplementation(jest.fn());

describe('socketio network hook tests', () => {
  test('it should subscribe to a socket when provided a url', () => {
    const mockAPI = 'mock';
    process.env.REACT_APP_API_URL = mockAPI;

    const { result } = renderHook(() => useDataSocket());

    act(() => {
      result.current();
    });

    expect(serviceSpy).toHaveBeenCalledTimes(1);
    expect(serviceSpy).toHaveBeenCalledWith(mockAPI);

    serviceSpy.mockRestore();
  });

  test('it should provide a console warning if no url is provided', () => {
    process.env.REACT_APP_API_URL = '';
    const { result } = renderHook(() => useDataSocket());

    act(() => {
      result.current();
    });

    expect(serviceSpy).not.toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
