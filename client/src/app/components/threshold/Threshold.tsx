import React, { ReactElement, MouseEvent, useRef } from 'react';
import styled from 'styled-components';

import useThreshold from '../../store/hooks/useThreshold';
import { toast } from 'react-toastify';

const Threshold = (): ReactElement => {
  const [clearThreshold, setThreshold] = useThreshold();
  const inputRef = useRef<HTMLInputElement>(null);

  const updateThreshold = (e: MouseEvent): void => {
    const value = inputRef.current?.value;

    if (!value) {
      toast.error('You must use a number for alerts.');
    } else {
      const num = Number(value);
      if (num > 100 || num < -100) {
        // The min/max could come from some kind of config. I'm just hard coding for this project.
        toast.error('The alert value must be between -100 and 100.');
      } else setThreshold(num);
    }
  };

  return (
    <ThresholdContainer>
      <ThresholdInput
        min={-100}
        max={100}
        placeholder="-100 to 100"
        type="number"
        ref={inputRef}
      />
      <ThresholdBtn onClick={updateThreshold}>Set Threshold</ThresholdBtn>
      <ThresholdClearBtn onClick={clearThreshold}>
        Clear Threshold
      </ThresholdClearBtn>
    </ThresholdContainer>
  );
};

export default Threshold;

const ThresholdContainer = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

const ThresholdInput = styled.input`
  outline: none;
  min-width: 100px;
`;

const ThresholdBtn = styled.button`
  appearance: none;
  border-radius: 5px;
  border: none;
  background: white;
  color: black;
  cursor: pointer;
  transition: 0.2s all;
  margin: 0 5px;
  padding: 5px 10px;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ThresholdClearBtn = styled(ThresholdBtn)`
  background: maroon;
  color: white;
`;
