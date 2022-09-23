import React from 'react';
import AppList from '@sift/components/AppList';
import AppCard from '@sift/components/AppCard';
import FollowItem from './FollowItem';
import { useIntl } from 'react-intl';
import { WhoToFollowType } from '@sift/models/apps/Wall';

type Props = {
  whoToFollow: WhoToFollowType[];
};

const WhoToFollow = ({ whoToFollow }: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ mb: 8 }}
      title={messages['wall.whoToFollow'] as string}
      contentStyle={{ px: 0 }}
      action={messages['common.viewAll'] as string}
    >
      <AppList
        data={whoToFollow}
        renderRow={(item, index) => <FollowItem key={index} item={item} />}
      />
    </AppCard>
  );
};

export default WhoToFollow;
