import React from 'react';
import useDataSocket from './network/socketio.hook';

function App() {
  const data = useDataSocket();

  return (
    <div className="App">
      <span>Hello world</span>
    </div>
  );
}

export default App;
