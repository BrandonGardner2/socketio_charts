import { Metrics } from './../selectors/data.selectors';
import { useMemo, useEffect, useCallback, MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { updateThreshold } from '../reducers/alerts/alerts.reducer';
import { getDataForMetricSelector } from '../selectors/data.selectors';
import { getThresholdSelector } from '../selectors/alerts.selectors';

type UseThresholdReturn = [(event: MouseEvent) => void, (val: number) => void];

const useThreshold = (): UseThresholdReturn => {
  const dispatch = useDispatch();
  const threshold = useSelector(getThresholdSelector);
  const data = useSelector(getDataForMetricSelector)(Metrics['Data Feed']);

  const setThreshold = useCallback(
    (val: number | undefined) => {
      dispatch(updateThreshold(val));
    },
    [dispatch]
  );

  const clearThreshold = useCallback(
    (_: MouseEvent): void => {
      setThreshold(undefined);
    },
    [setThreshold]
  );

  const shouldSendAlert = useMemo<boolean>(() => {
    return (
      typeof threshold === 'number' && data[data.length - 1]?.value > threshold
    );
  }, [threshold, data]);

  useEffect(() => {
    if (shouldSendAlert) toast.error(`Alert!: ${data[data.length - 1].value}`);
    // We really only want to try and alert on data changing. It shouldn't matter whether threshold changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return [clearThreshold, setThreshold];
};

export default useThreshold;
