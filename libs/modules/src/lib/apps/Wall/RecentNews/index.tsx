import React from 'react';
import AppCard from '@sift/components/AppCard';
import AppList from '@sift/components/AppList';
import NewsItem from './NewsItem';
import { useIntl } from 'react-intl';
import { RecentNewsType } from '@sift/models/apps/Wall';

type Props = {
  recentNews: RecentNewsType[];
};

const RecentNews = ({ recentNews }: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['wall.recentNews'] as string}
      contentStyle={{ px: 0, pt: 2 }}
    >
      <AppList
        data={recentNews}
        renderRow={(item, index) => <NewsItem key={index} item={item} />}
      />
    </AppCard>
  );
};

export default RecentNews;
