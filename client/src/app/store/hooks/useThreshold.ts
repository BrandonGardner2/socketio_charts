import {
  useState,
  useMemo,
  useEffect,
  Dispatch,
  SetStateAction,
  useCallback,
  MouseEvent
} from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getDataSelector } from '../selectors/data.selectors';

type Threshold = number | undefined;

type UseThresholdReturn = [
  (event: MouseEvent) => void,
  Dispatch<SetStateAction<Threshold>>
];

const useThreshold = (): UseThresholdReturn => {
  const [threshold, setThreshold] = useState<Threshold>();
  const data = useSelector(getDataSelector);

  const clearThreshold = useCallback((_: MouseEvent): void => {
    setThreshold(undefined);
  }, []);

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
