import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { Fonts } from '@sift/constants/AppEnums';
import { EarningGraphType } from '@sift/models/dashboards/CRM';

type EarningGraphProps ={
  earningGraphData: EarningGraphType[];
}

const EarningGraph: React.FC<EarningGraphProps> = ({ earningGraphData }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <text
          x="50%"
          fontWeight={Fonts.MEDIUM}
          fontSize={20}
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          67%
        </text>
        <Pie
          data={earningGraphData}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={87}
          outerRadius={100}
          fill="#8884d8"
        >
          {earningGraphData.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EarningGraph;
