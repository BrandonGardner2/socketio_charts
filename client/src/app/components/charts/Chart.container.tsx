import React, { ReactElement, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { getChartSelector } from '../../store/selectors/charts.selectors';
import { ChartType } from '../../store/reducers/charts/charts.reducer';
import BarChartComponent from './BarChart';
import styled from 'styled-components';

const ChartContainer = (): ReactElement => {
  const chartType = useSelector(getChartSelector);

  const Chart = useMemo(() => {
    switch (chartType) {
      case ChartType.LINE:
        return <span>Line graph</span>;
      case ChartType.BAR:
      default:
        return <BarChartComponent />;
    }
  }, [chartType]);

  return <ChartWrapper>{Chart}</ChartWrapper>;
};

export default ChartContainer;

const ChartWrapper = styled.div`
  width: 1000px;
  height: 400px;
  margin: 30px auto;
`;
