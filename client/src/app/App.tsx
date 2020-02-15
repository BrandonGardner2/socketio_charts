import React, { useEffect } from 'react';
import useDataSocket from './network/socketio.hook';

function App() {
  const startListening = useDataSocket();

  useEffect(() => {
    startListening();
  }, []);

  return (
    <div className="App">
      <span>Hello world</span>
    </div>
  );
}

export default App;
