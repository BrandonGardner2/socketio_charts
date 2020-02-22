import React, { ReactElement } from 'react';
import styled from 'styled-components';

import ChartContainer, { ChartProps } from '../charts/Chart.container';
import Header from '../header/Header';
import { ChartType } from '../../store/reducers/charts/charts.reducer';

const Dashboard = (): ReactElement => {
  const metrics = mockMetrics;
  return (
    <DashboardContainer>
      <Header />
      <MetricsContainer>
        {metrics.map((config) => (
          <ChartContainer
            key={config.metric}
            metric={config.metric}
            chartType={config.chartType}
          />
        ))}
      </MetricsContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

const mockMetrics: ChartProps[] = [
  {
    metric: 'Data Feed',
    chartType: ChartType.LINE
  },
  {
    metric: 'Data Per Category',
    chartType: ChartType.BAR
  }
];

const DashboardContainer = styled.div`
  width: 100%;

  @media (min-width: 1055px) {
    width: 80%;
  }
`;

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
