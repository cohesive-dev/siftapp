import React from 'react';
import { Box, Grid } from '@mui/material';
import AppCard from '@sift/components/AppCard';
import IntlMessages from '@sift/helpers/IntlMessages';
import { Fonts } from '@sift/constants/AppEnums';

import AppAnimate from '@sift/components/AppAnimate';
import AppGridContainer from '@sift/components/AppGridContainer';
import { useGetDataApi } from '@sift/hooks/APIHooks';
import {
  DeliveryAddress,
  OrderSummary,
  PaymentInfo,
} from '@sift/modules/ecommerce/Checkout';
import AppLoader from '@sift/components/AppLoader';
import { CartItemsType } from '@sift/models/ecommerce/EcommerceApp';

const Checkout = () => {
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
            <Box
              sx={{
                component: 'h2',
                color: 'text.primary',
                fontWeight: Fonts.BOLD,
                mb: 6,
                fontSize: 16,
              }}
            >
              <IntlMessages id="sidebar.ecommerce.checkout" />
            </Box>
            <AppGridContainer>
              <Grid item xs={12} md={8}>
                <AppCard
                  title={
                    <Box sx={{ fontSize: 16, fontWeight: Fonts.BOLD }}>
                      Delivery Address
                    </Box>
                  }
                >
                  <DeliveryAddress />
                </AppCard>
              </Grid>
              <Grid item xs={12} md={4}>
                <OrderSummary cartItems={cartItems} />
                <PaymentInfo />
              </Grid>
            </AppGridContainer>
          </Box>
        </AppAnimate>
      )}
    </>
  );
};

export default Checkout;
