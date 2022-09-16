import React from 'react';
import { Box } from '@mui/material';
import AppAnimate from '@sift/components/AppAnimate';
import { useGetDataApi } from '@sift/hooks/APIHooks';
import {
  AddressInfo,
  ItemsList,
  OrderPlaced,
} from '@sift/modules/ecommerce/Confirmation';
import { addresses } from '@sift/fakedb/ecommerceData';
import AppLoader from '@sift/components/AppLoader';
import { CartItemsType } from '@sift/models/ecommerce/EcommerceApp';

const Confirmation = () => {
  const [{ apiData: cartItems, loading }] = useGetDataApi<CartItemsType[]>(
    '/api/cart/get',
    []
  );
  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppAnimate animation="transition.slideUpIn" delay={200}>
          <Box>
            <OrderPlaced cartItems={cartItems} />
            <AddressInfo address={addresses[0]} />
            <ItemsList cartItems={cartItems} />
          </Box>
        </AppAnimate>
      )}
    </>
  );
};

export default Confirmation;
