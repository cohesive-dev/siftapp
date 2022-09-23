import React from 'react';
import AppCard from '@sift/components/AppCard';
import { useIntl } from 'react-intl';
import MarketingTable from './MarketingTable';
import { MarketingCampaignType } from '@sift/models/dashboards/Ecommerce';

type MarketingCampaignProps = {
  marketingCampaign: MarketingCampaignType[];
};

const MarketingCampaign: React.FC<MarketingCampaignProps> = ({
  marketingCampaign,
}) => {
  const { messages } = useIntl();

  return (
    <AppCard
      title={messages['eCommerce.marketingCampaign'] as string}
      contentStyle={{ px: 0 }}
    >
      <MarketingTable marketingCampaign={marketingCampaign} />
    </AppCard>
  );
};

export default MarketingCampaign;
