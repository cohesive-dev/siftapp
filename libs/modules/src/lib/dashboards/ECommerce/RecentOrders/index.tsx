import React from 'react';
import AppCard from '@sift/components/AppCard';
import { useIntl } from 'react-intl';
import AppSelect from '@sift/components/AppSelect';
import OrderTable from './OrderTable';
import { RecentOrderType } from '@sift/models/dashboards/Ecommerce';
import { SelectChangeEvent } from '@mui/material/Select';

type RecentOrdersProps = {
  recentOrders: RecentOrderType[];
};

const RecentOrders: React.FC<RecentOrdersProps> = ({ recentOrders }) => {
  const { messages } = useIntl();
  const handleSelectionType = (data: SelectChangeEvent) => {
    console.log('data: ', data);
  };
  return (
    <AppCard
      contentStyle={{ px: 0 }}
      title={messages['eCommerce.recentOrders'] as string}
      action={
        <AppSelect
          selectionKey=""
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
      <OrderTable orderData={recentOrders} />
    </AppCard>
  );
};

export default RecentOrders;
