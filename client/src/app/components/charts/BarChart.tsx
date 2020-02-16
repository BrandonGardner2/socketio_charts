import React, { useMemo } from 'react';
import {
  Bar,
  BarChart,
  Cell,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
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

  const key = `ifPositiveValue${color}`;
  // I want to be clear I am using some SVG magic from another project I have worked on.
  // I definitely couldn't whip out the linear gradients in a few minutes without docs. :)
  return (
    <ResponsiveContainer>
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
          interval={'preserveStartEnd'}
          minTickGap={0}
          height={12}
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
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`url(#${key})`} />
          ))}
        </Bar>
        <Tooltip active={true} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
