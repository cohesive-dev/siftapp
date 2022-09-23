import React, { useState } from 'react';
import AppList from '@sift/components/AppList';
import AddressCell from './AddressCell';
import { AddressesType } from '@sift/models/ecommerce/EcommerceApp';
import { addresses } from '@sift/fakedb/data';

const DeliveryAddress = () => {
  const [selectedAddress, setSelectAddress] = useState<AddressesType>(
    addresses[1]
  );
  return (
    <AppList
      delay={200}
      data={addresses}
      renderRow={(address) => (
        <AddressCell
          key={address.id}
          address={address}
          selectedAddress={selectedAddress}
          setSelectAddress={setSelectAddress}
        />
      )}
    />
  );
};

export default DeliveryAddress;
