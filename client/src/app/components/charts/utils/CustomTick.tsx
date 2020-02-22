import React, { ReactElement } from 'react';

export interface TickProps {
  x: number;
  y: number;
  payload: {
    value: string;
  };
}

const CustomizedAxisTick = ({ x, y, payload }: TickProps): ReactElement => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)">
        {payload.value}
      </text>
    </g>
  );
};

export default CustomizedAxisTick;
