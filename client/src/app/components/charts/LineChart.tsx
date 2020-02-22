import React, { ReactElement } from 'react';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer
} from 'recharts';
import { useSelector } from 'react-redux';

import { getDataSelector } from '../../store/selectors/data.selectors';

const LineChartComponent = (): ReactElement => {
  const data = useSelector(getDataSelector);

  return (
    // Manually matching height from bar chart here just in interest of time.
    <LineChart data={data} margin={{ top: 5, right: 50, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis domain={[-100, 100]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="black" />
    </LineChart>
  );
};

export default LineChartComponent;
