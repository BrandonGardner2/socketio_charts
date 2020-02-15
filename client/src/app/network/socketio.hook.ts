import { useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import startSocketIOService from './socketio.service';

const useDataSocket = () => {
  const dispatch = useDispatch();
  const [socket, setSocket] = useState<SocketIOClient.Socket>();
  const data: number[] = [];

  const handleNewData = useCallback(
    (newData: any) => {
      console.log(newData);
    },
    [dispatch]
  );

  // Simple use effect to create and store a socket connection.
  // All logic could be in one use effect but I want it to be clear what is going on.
  useEffect(() => {
    if (!socket && process.env.REACT_APP_API_URL) {
      setSocket(startSocketIOService(process.env.REACT_APP_API_URL));
    }
  }, [socket]);

  // When the socket exists we will create a listener and define our cleanup to remove it.
  useEffect(() => {
    socket && socket.on('data', handleNewData);

    return () => {
      socket && socket.close();
    };
  }, [socket, handleNewData]);

  return data;
};

export default useDataSocket;
