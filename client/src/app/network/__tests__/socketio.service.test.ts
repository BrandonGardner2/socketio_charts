import * as mockIo from 'socket.io-client';
import useSocketService from '../socketio.service';

jest.mock('socket.io-client', () => jest.fn());

describe('socket service tests', () => {
  test('it should call the socketio service with url passed in', () => {
    const url = 'mock';
    useSocketService(url);

    expect(mockIo).toBeCalledTimes(1);
    expect(mockIo).toBeCalledWith(url);
  });
});
