import React, { ReactElement } from 'react';
import styled from 'styled-components';
import ChartContainer from '../charts/Chart.container';
import Header from '../header/Header';

const Dashboard = (): ReactElement => {
  return (
    <DashboardContainer>
      <Header />
      <ChartContainer />
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  font-family: Poppins;
  width: 100%;

  @media (min-width: 1055px) {
    width: 80%;
  }
`;
