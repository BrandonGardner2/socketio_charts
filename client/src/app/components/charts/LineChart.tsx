import React, { ReactElement } from 'react';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer
} from 'recharts';
import { useSelector } from 'react-redux';

import { getDataSelector } from '../../store/selectors/data.selectors';
import CustomizedAxisTick from './utils/CustomTick';

const LineChartComponent = (): ReactElement => {
  const data = useSelector(getDataSelector);

  return (
    <ResponsiveContainer height="77.5%">
      <LineChart data={data} margin={{ top: 5, right: 50, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" tick={CustomizedAxisTick} />
        <YAxis domain={[-100, 100]} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#00c49e" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
