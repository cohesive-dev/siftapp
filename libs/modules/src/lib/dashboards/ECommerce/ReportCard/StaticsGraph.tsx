import React from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

type StaticsGraphProps = {
  id: number;
  strokeColor: string;
  graphData: {
    month: string;
    number: number;
  }[];
  growth: number;
};

const StaticsGraph: React.FC<StaticsGraphProps> = ({
  id,
  graphData,
  strokeColor,
}) => {
  return (
    <ResponsiveContainer width="100%" height={50}>
      <AreaChart
        data={graphData}
        margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id={'colorPv' + id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={strokeColor} stopOpacity={0.15} />
            <stop offset="95%" stopColor={strokeColor} stopOpacity={0.01} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="number"
          stroke={strokeColor}
          strokeWidth={3}
          fillOpacity={1}
          fill={`url(#${`colorPv` + id})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StaticsGraph;
