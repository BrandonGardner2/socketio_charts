import React, { ReactElement, useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getChartSelector } from '../../store/selectors/charts.selectors';
import { ChartType } from '../../store/reducers/charts/charts.reducer';
import BarChartComponent from './BarChart';
import LineChartComponent from './LineChart';

const ChartContainer = (): ReactElement => {
  const chartType = useSelector(getChartSelector);

  const Chart = useMemo(() => {
    switch (chartType) {
      case ChartType.LINE:
        return <LineChartComponent />;
      case ChartType.BAR:
      default:
        return <BarChartComponent />;
    }
  }, [chartType]);

  return <ChartWrapper>{Chart}</ChartWrapper>;
};

export default ChartContainer;

const ChartWrapper = styled.div`
  width: 100%;
  height: 400px;
  margin: 30px auto;
  padding: 15px 5px 50px 0px;

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
