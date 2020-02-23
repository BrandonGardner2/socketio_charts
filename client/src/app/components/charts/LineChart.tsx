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

import { ChartData } from '../../store/reducers/data/data.reducer';
import CustomizedAxisTick from './utils/CustomTick';

interface OwnProps {
  data: ChartData[];
}

const LineChartComponent = ({ data }: OwnProps): ReactElement => {
  return (
    <ResponsiveContainer height="77.5%">
      <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="key" tick={CustomizedAxisTick} />
        <YAxis domain={[-100, 100]} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#00c49e" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
