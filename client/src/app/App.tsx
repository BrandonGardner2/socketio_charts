import React, { useEffect } from 'react';

import useDataSocket from './network/socketio.hook';
import ChartContainer from './components/charts/Chart.container';

function App(): React.ReactElement {
  const startListening = useDataSocket();

  useEffect(() => {
    if (startListening) startListening();
  }, [startListening]);

  return (
    <div className="App">
      <span>Hello world</span>
      <ChartContainer />
    </div>
  );
}

export default App;
