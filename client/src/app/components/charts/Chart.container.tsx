import React, { ReactElement, useMemo } from 'react';
import styled from 'styled-components';

import BarChartComponent from './BarChart';
import LineChartComponent from './LineChart';

type ChartData = {
  value: number | string;
  key: string;
};

export enum ChartType {
  BAR = 'BAR',
  LINE = 'LINE'
}
export interface ChartProps {
  metric: string;
  chartType: ChartType;
}

const ChartContainer = ({ metric, chartType }: ChartProps): ReactElement => {
  const Chart = useMemo(() => {
    switch (chartType) {
      case ChartType.LINE:
        return <LineChartComponent />;
      case ChartType.BAR:
      default:
        return <BarChartComponent />;
    }
  }, [chartType]);

  return (
    <Container>
      <ChartTitle>{metric}</ChartTitle>
      <ChartWrapper>{Chart}</ChartWrapper>
    </Container>
  );
};

export default ChartContainer;

const Container = styled.div`
  width: 100%;
  height: 300px;
  margin: 30px auto;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

  @media (min-width: 1200px) {
    width: 45%;
  }
`;

const ChartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85%;
  width: 100%;

  svg.recharts-surface {
    overflow: visible;
  }

  path.recharts-tooltip-cursor {
    fill: rgba(0, 0, 0, 0.2);
  }

  path.recharts-curve.recharts-tooltip-cursor {
    stroke: rgba(0, 0, 0, 0.2);
  }
`;

const ChartTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid black;
  padding: 10px 20px;
  margin: 0;
`;
