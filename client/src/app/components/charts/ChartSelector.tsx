import React, { ReactElement } from 'react';

import useChartType from '../../store/hooks/useChartType';
import { ChartType } from '../../store/reducers/charts/charts.reducer';
import styled from 'styled-components';
import ChartButtonComponent from './ChartButton';

const chartTypes = Object.values(ChartType);

const ChartSelector = (): ReactElement => {
  const [chartType, setChartType] = useChartType();

  return (
    <SelectorContainer>
      {chartTypes.map((type) => {
        return (
          <ChartButtonComponent
            key={type}
            isActive={chartType === type}
            setChartType={setChartType}
            type={type}
          />
        );
      })}
    </SelectorContainer>
  );
};

export default ChartSelector;

const SelectorContainer = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: space-between;
`;
