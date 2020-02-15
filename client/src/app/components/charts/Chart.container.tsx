import React, { ReactElement, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { getDataSelector } from '../../store/selectors/data.selectors';
import { getChartSelector } from '../../store/selectors/charts.selectors';
import { ChartType } from '../../store/reducers/charts/charts.reducer';

const ChartContainer = (): ReactElement => {
  const chartData = useSelector(getDataSelector);
  const chartType = useSelector(getChartSelector);

  const { min, max } = useMemo(() => {
    let min = 0;
    let max = 0;

    chartData.forEach((point) => {
      point.value > max && (max = point.value);
      point.value < min && (min = point.value);
    });

    return { min, max };
  }, [chartData]);

  const Chart = useMemo(() => {
    switch (chartType) {
      case ChartType.LINE:
        return <span>Line graph</span>;
      case ChartType.BAR:
      default:
        return <span>Bar graph</span>;
    }
  }, [chartType]);

  console.log(min, max);
  return Chart;
};

export default ChartContainer;
