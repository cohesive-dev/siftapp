import React from 'react';
import AppCard from '@sift/components/AppCard';
import AppSelect from '@sift/components/AppSelect';
import { useIntl } from 'react-intl';
import ActivityGraph from './ActivityGraph';
import { YourActivityType } from '@sift/models/dashboards/HealthCare';

type YourActivityProps = {
  data: YourActivityType[];
};

const YourActivity: React.FC<YourActivityProps> = ({ data }) => {
  const handleChange = (value: unknown) => {
    console.log('value', value);
  };
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['healthCare.yourActivity'] as string}
      action={
        <AppSelect
          menus={['This Week', 'Last Week', 'This Month']}
          defaultValue="This Week"
          onChange={handleChange}
        />
      }
    >
      <ActivityGraph data={data} />
    </AppCard>
  );
};

export default YourActivity;
