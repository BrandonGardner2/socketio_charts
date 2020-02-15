import io from 'socket.io-client';

const startSocketIOService = (url: string) => {
  return io(url);
};

export default startSocketIOService;
