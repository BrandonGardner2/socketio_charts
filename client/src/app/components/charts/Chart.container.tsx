import React, { ReactElement, useMemo } from 'react';
import styled from 'styled-components';

import { ChartType } from '../../store/reducers/charts/charts.reducer';
import BarChartComponent from './BarChart';
import LineChartComponent from './LineChart';
import { ResponsiveContainer } from 'recharts';

type ChartData = {
  value: number | string;
  key: string;
};
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
    <ChartWrapper>
      <ChartTitle>{metric}</ChartTitle>
      <ResponsiveContainer height="80%">{Chart}</ResponsiveContainer>
    </ChartWrapper>
  );
};

export default ChartContainer;

const ChartWrapper = styled.div`
  width: 45%;
  height: 300px;
  margin: 30px auto;
  padding-bottom: 15px;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

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
