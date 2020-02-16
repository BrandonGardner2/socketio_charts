import { ChartType, setChartType } from './../reducers/charts/charts.reducer';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { getChartSelector } from '../selectors/charts.selectors';

export type SetChartTypeCallback = (type: ChartType) => void;
type UseChartTypeReturn = [ChartType, SetChartTypeCallback];

const useChartType = (): UseChartTypeReturn => {
  const dispatch = useDispatch();
  const chartType = useSelector(getChartSelector);

  const setNewType = useCallback(
    (type: ChartType): void => {
      dispatch(setChartType(type));
    },
    [dispatch]
  );

  return [chartType, setNewType];
};

export default useChartType;
