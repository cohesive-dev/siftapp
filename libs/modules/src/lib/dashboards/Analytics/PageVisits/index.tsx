import React from 'react';
import AppCard from '@sift/components/AppCard';
import VisitsTable from './VisitsTable';
import { useIntl } from 'react-intl';
import { PageVisitType } from '@sift/models/dashboards/Analytics';

type PageVisitsProps = {
  pageVisits: PageVisitType[];
};

const PageVisits: React.FC<PageVisitsProps> = ({ pageVisits }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      contentStyle={{ px: 0 }}
      title={messages['dashboard.analytics.pageVisits'] as string}
      action={messages['common.viewAll'] as string}
    >
      <VisitsTable visitsData={pageVisits} />
    </AppCard>
  );
};

export default PageVisits;
