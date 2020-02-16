import React, { useEffect } from 'react';

import useDataSocket from './network/socketio.hook';
import styled from 'styled-components';
import Dashboard from './components/dashboard/Dashboard';

function App(): React.ReactElement {
  const startListening = useDataSocket();

  useEffect(() => {
    if (startListening) startListening();
  }, [startListening]);

  return (
    <AppContainer>
      <Dashboard />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
