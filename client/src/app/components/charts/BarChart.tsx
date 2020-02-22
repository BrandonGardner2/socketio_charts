import React, { useMemo, ReactElement } from 'react';
import {
  Bar,
  BarChart,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { useSelector } from 'react-redux';
import { getPerCategorySelector } from '../../store/selectors/data.selectors';

const ANIMATION_DURATION = 500;
// Color could be something I allow the user to select.
// Just hard coding for now.
const color = 'red';

const BarChartComponent: React.FunctionComponent = () => {
  const data = useSelector(getPerCategorySelector);
  const dataMax = useMemo(() => {
    return (
      data.reduce((acc, cur) => (cur.total > acc ? cur.total : acc), 0) + 1
    );
  }, [data]);

  const key = `svg${color}`;
  return (
    <BarChart data={data}>
      <defs>
        <linearGradient id={key} x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={1} />
          <stop offset="100%" stopColor={color} stopOpacity={0.2} />
        </linearGradient>
      </defs>
      <XAxis
        dataKey="key"
        axisLine={false}
        tickLine={false}
        interval={1}
        minTickGap={0}
        height={12}
        tick={CustomizedAxisTick}
      />
      <YAxis
        hide={false}
        domain={[0, dataMax]}
        axisLine={false}
        tickLine={false}
        interval={0}
      />
      <ReferenceLine y={0} strokeDasharray="2 2" className={'zero-line'} />
      <Bar dataKey="total" animationDuration={ANIMATION_DURATION}>
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={`url(#${key})`} />
        ))}
      </Bar>
      <Tooltip active={true} />
    </BarChart>
  );
};

interface TickProps {
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

export default BarChartComponent;
