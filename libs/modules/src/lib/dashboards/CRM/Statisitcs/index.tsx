import React from 'react';
import GraphTabs from './GraphTabs';
import AppCard from '@sift/components/AppCard';
import { StatisticType } from '@sift/models/dashboards/CRM';

type StatisticsProps ={
  projectData: StatisticType[];
  clientsData: StatisticType[];
  incomeData: StatisticType[];
}

export const Statistics: React.FC<StatisticsProps> = ({
  clientsData,
  incomeData,
  projectData,
}) => {
  return (
    <AppCard sxStyle={{ height: 1 }}>
      <GraphTabs
        clientsData={clientsData}
        incomeData={incomeData}
        projectData={projectData}
      />
    </AppCard>
  );
};

export default Statistics;
