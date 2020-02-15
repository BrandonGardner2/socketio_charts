import { useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';

import startSocketIOService from './socketio.service';
import { addData, ChartData } from '../store/reducers/data/data.reducer';

type CreateSocketCallback = () => void;

const useDataSocket = (): CreateSocketCallback => {
  const dispatch = useDispatch();
  const [socket, setSocket] = useState<SocketIOClient.Socket>();

  // As new data comes in we will add it to the redux store
  const handleNewData = useCallback(
    (newData: ChartData) => {
      dispatch(addData(newData));
    },
    [dispatch]
  );

  // I am hard coding to use env api url since this is "useDataSocket".
  // We could abstract and make this more of a general socket connection if we wanted to.
  const createSocket = useCallback(() => {
    if (process.env.REACT_APP_API_URL) {
      setSocket(startSocketIOService(process.env.REACT_APP_API_URL));
    } else {
      console.log(
        'Whoops, you are missing the environment variable for your API!'
      );
    }
  }, []);

  // When the socket exists we will create a listener.
  useEffect(() => {
    if (socket) {
      socket.on('data', handleNewData);
    }
  }, [socket, handleNewData]);

  // We only want to close the connection on unmounting
  useEffect(() => {
    return (): void => {
      if (socket) socket.close();
    };
  }, [socket]);

  return createSocket;
};

export default useDataSocket;
