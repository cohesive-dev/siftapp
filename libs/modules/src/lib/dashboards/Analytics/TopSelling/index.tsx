import React from 'react';
import AppCard from '@sift/components/AppCard';
import ProductCell from './ProductCell';
import { useIntl } from 'react-intl';
import AppList from '@sift/components/AppList';
import { TopSellingProductType } from '@sift/models/dashboards/Analytics';

type TopSellingProps = {
  products: TopSellingProductType[];
};

const TopSelling: React.FC<TopSellingProps> = ({ products }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      contentStyle={{ px: 0 }}
      sxStyle={{ height: 1 }}
      title={messages['dashboard.analytics.topSellingProducts'] as string}
      footer={'+12 ' + messages['common.more']}
    >
      <AppList
        animation="transition.slideRightBigIn"
        data={products}
        renderRow={(data, index) => <ProductCell key={index} data={data} />}
      />
    </AppCard>
  );
};

export default TopSelling;
