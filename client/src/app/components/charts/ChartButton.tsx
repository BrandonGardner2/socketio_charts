import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { SetChartTypeCallback } from '../../store/hooks/useChartType';
import { ChartType } from '../../store/reducers/charts/charts.reducer';

interface ChartButtonProps {
  isActive: boolean;
  setChartType: SetChartTypeCallback;
  type: ChartType;
}

const ChartButtonComponent = ({
  isActive,
  setChartType,
  type
}: ChartButtonProps): ReactElement => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setChartType(type);
  };

  return (
    <ChartButton isActive={isActive} onClick={handleClick}>
      {type}
    </ChartButton>
  );
};

export default ChartButtonComponent;

const ChartButton = styled.button<Pick<ChartButtonProps, 'isActive'>>`
  appearance: none;
  color: ${({ isActive }): string => (isActive ? 'white' : 'black')};
  background: ${({ isActive }): string => (isActive ? 'red' : 'white')};
  border-radius: 5px;
  cursor: pointer;
  height: 40px;
  width: 60px;
  transition: all 0.2s;

  &:last-child {
    margin-left: 10px;
  }

  &: hover {
    transform: translateY(-2px);
    box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.2);
  }
`;
