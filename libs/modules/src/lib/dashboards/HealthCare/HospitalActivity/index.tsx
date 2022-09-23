import React from 'react';
import StatGraphs from './StatGraphs';
import AppCard from '@sift/components/AppCard';
import AppSelect from '@sift/components/AppSelect';
import { useIntl } from 'react-intl';
import { HospitalActivityType } from '@sift/models/dashboards/HealthCare';

type HospitalActivityProps = {
  data: HospitalActivityType[];
};

const HospitalActivity: React.FC<HospitalActivityProps> = ({ data }) => {
  const handleSelectionType = (data: unknown) => {
    console.log('data: ', data);
  };
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages['healthCare.hospitalActivity'] as string}
      action={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }
    >
      <StatGraphs data={data} />
    </AppCard>
  );
};
export default HospitalActivity;
