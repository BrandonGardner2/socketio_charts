import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Metrics } from '../../store/selectors/data.selectors';
import ChartContainer, {
  ChartProps,
  ChartType
} from '../charts/Chart.container';
import Header from '../header/Header';

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
    metric: Metrics['Data Feed'],
    chartType: ChartType.LINE
  },
  {
    metric: Metrics['Data Per Category'],
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
  flex-wrap: wrap;
`;
