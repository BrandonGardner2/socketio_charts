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

import CustomizedAxisTick from './utils/CustomTick';
import { ChartData } from '../../store/reducers/data/data.reducer';

const ANIMATION_DURATION = 500;
// Color could be something I allow the user to select.
// Just hard coding for now.
const color = '#00c49e';

interface OwnProps {
  data: ChartData[];
}

const BarChartComponent = ({ data }: OwnProps): ReactElement => {
  const dataMax = useMemo(() => {
    return (
      data.reduce((acc, cur) => (cur.value > acc ? cur.value : acc), 0) + 1
    );
  }, [data]);

  const key = `svg${color}`;
  return (
    <ResponsiveContainer height="60%">
      <BarChart data={data} margin={{ right: 10 }}>
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
        <Bar dataKey="value" animationDuration={ANIMATION_DURATION}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={`url(#${key})`} />
          ))}
        </Bar>
        <Tooltip active={true} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
