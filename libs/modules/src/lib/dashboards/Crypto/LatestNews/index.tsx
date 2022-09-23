import React from 'react';
import NewsList from './NewsList';
import AppCard from '@sift/components/AppCard';
import { useIntl } from 'react-intl';
import { NewsDataType } from '@sift/models/dashboards/Crypto';

type LatestNewsProps ={
  newsData: NewsDataType[];
}

const LatestNews: React.FC<LatestNewsProps> = ({ newsData }) => {
  const { messages } = useIntl();

  return (
    <AppCard
      sxStyle={{ height: 1 }}
      contentStyle={{ px: 0 }}
      title={messages['dashboard.latestNews'] as string}
      action={messages['common.viewAll'] as string}
    >
      <NewsList newsData={newsData} />
    </AppCard>
  );
};

export default LatestNews;
