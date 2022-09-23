import React from 'react';
import AppCard from '@sift/components/AppCard';
import { useIntl } from 'react-intl';
import CustomerItem from './CustomerItem';
import AppList from '@sift/components/AppList';
import AppScrollbar from '@sift/components/AppScrollbar';
import { NewCustomersType } from '@sift/models/dashboards/Ecommerce';

type NewCustomersProps = {
  newCustomers: NewCustomersType[];
};

const NewCustomers: React.FC<NewCustomersProps> = ({ newCustomers }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['eCommerce.newCustomers'] as string}
      contentStyle={{ px: 0 }}
    >
      <AppScrollbar sx={{ maxHeight: 280 }}>
        <AppList
          data={newCustomers}
          renderRow={(item) => (
            <CustomerItem listStyle="paddingX" key={item.id} item={item} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default NewCustomers;
