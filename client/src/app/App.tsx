import React, { useEffect } from 'react';
import useDataSocket from './network/socketio.hook';

function App(): React.ReactElement {
  const startListening = useDataSocket();

  useEffect(() => {
    if (startListening) startListening();
  }, [startListening]);

  return (
    <div className="App">
      <span>Hello world</span>
    </div>
  );
}

export default App;
