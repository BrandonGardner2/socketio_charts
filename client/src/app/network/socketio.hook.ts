import { useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import startSocketIOService from './socketio.service';
import { addData, ChartData } from '../store/reducers/data/data-reducer';

const useDataSocket = () => {
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
    }
  }, []);

  // When the socket exists we will create a listener and define our cleanup to remove it.
  useEffect(() => {
    if (socket) {
      console.log('Socket listener starting.');
      socket.on('data', handleNewData);
    }

    return () => {
      console.log('Socket closing.');
      socket && socket.close();
    };
  }, [socket, handleNewData]);

  return createSocket;
};

export default useDataSocket;
