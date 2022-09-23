import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { ChartDataType } from '@sift/models/dashboards/Analytics';

type MixBarChartProp = {
  data: ChartDataType[];
};

const MixBarChart: React.FC<MixBarChartProp> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={270}>
      <BarChart
        barSize={7}
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" dy={10} />
        <Tooltip />
        <Bar dataKey="Seed" stackId="a" fill="#49BD65" unit="M USD" />
        <Bar dataKey="Series A" stackId="a" fill="#0A8FDC" unit="M USD" />
        <Bar dataKey="Series B" stackId="a" fill="#F7B500" unit="M USD" />
        <Bar dataKey="Late stages" stackId="a" fill="#F75D81" unit="M USD" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MixBarChart;
