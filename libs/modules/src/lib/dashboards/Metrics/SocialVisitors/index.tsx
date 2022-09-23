import React from 'react';
import SocialVisitorsGraph from './SocialVisitorsGraph';
import Categories from './Categories';
import AppCard from '@sift/components/AppCard';
import { useIntl } from 'react-intl';
import { SocialVisitorsType } from '@sift/models/dashboards/Metrics';

type SocialVisitorsProps = {
  data: SocialVisitorsType[];
};

const SocialVisitors: React.FC<SocialVisitorsProps> = ({ data }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['dashboard.socialVisitors'] as string}
      action={messages['common.viewAll'] as string}
    >
      <SocialVisitorsGraph data={data} />

      <Categories data={data} />
    </AppCard>
  );
};

export default SocialVisitors;
