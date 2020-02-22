import io from 'socket.io-client';

const startSocketIOService = (url: string): SocketIOClient.Socket => {
  return io(url);
};

export default startSocketIOService;
