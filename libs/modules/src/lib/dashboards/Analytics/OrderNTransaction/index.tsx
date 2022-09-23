import React from 'react';
import AppCard from '@sift/components/AppCard';
import TransactionTable from './TransactionTable';
import AppSelect from '@sift/components/AppSelect';
import { useIntl } from 'react-intl';
import { TransactionDataType } from '@sift/models/dashboards/Analytics';

type Props = {
  transactionData: TransactionDataType[];
};

const OrderNTransaction = ({ transactionData }: Props) => {
  const handleSelectionType = (data: string) => {
    console.log('data: ', data);
  };
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      contentStyle={{ px: 0 }}
      title={messages['dashboard.analytics.ordersTransaction'] as string}
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
      <TransactionTable transactionData={transactionData} />
    </AppCard>
  );
};

export default OrderNTransaction;
