import React from 'react';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import AppCard from '@sift/components/AppCard';
import IntlMessages from '@sift/helpers/IntlMessages';
import { Fonts } from '@sift/constants/AppEnums';
import AppAnimate from '@sift/components/AppAnimate';
import AppGridContainer from '@sift/components/AppGridContainer';
import { postDataApi, putDataApi, useGetDataApi } from '@sift/hooks/APIHooks';
import { CartTable, OrderSummary } from '@sift/modules/ecommerce/Carts';
import AppLoader from '@sift/components/AppLoader';
import { useInfoViewActionsContext } from '@sift/context/InfoViewContextProvider';
import { CartItemsType } from '@sift/models/ecommerce/EcommerceApp';

const Carts = () => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const router = useRouter();

  const [{ apiData, loading }, { setData }] = useGetDataApi<CartItemsType[]>(
    '/api/cart/get',
    [],
    {}
  );

  const onRemoveItem = (product: CartItemsType) => {
    postDataApi<CartItemsType[]>('/api/cart/remove', infoViewActionsContext, {
      product,
    })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onDecrement = (data: CartItemsType) => {
    if (data.count > 1) {
      putDataApi<CartItemsType[]>('/api/cart/update', infoViewActionsContext, {
        product: { ...data, count: data.count - 1 },
      })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    } else {
      postDataApi<CartItemsType[]>('/api/cart/remove', infoViewActionsContext, {
        product: data,
      })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    }
  };
  const onIncrement = (data: CartItemsType) => {
    putDataApi<CartItemsType[]>('/api/cart/update', infoViewActionsContext, {
      product: { ...data, count: data.count + 1 },
    })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppAnimate animation="transition.slideUpIn" delay={200}>
          <Box>
            <Box
              component="h2"
              sx={{
                color: 'text.primary',
                fontWeight: Fonts.BOLD,
                mb: 6,
                fontSize: 16,
              }}
            >
              <IntlMessages id="sidebar.ecommerce.cart" />
            </Box>
            <AppGridContainer>
              <Grid item xs={12} md={8}>
                <AppCard
                  contentStyle={{ px: 0 }}
                  footer={
                    <Box
                      sx={{
                        mt: 4,
                        width: 1,
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          router.push('/ecommerce/products');
                        }}
                      >
                        Continue Shopping
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                          router.push('/ecommerce/checkout');
                        }}
                      >
                        Checkout
                      </Button>
                    </Box>
                  }
                >
                  <CartTable
                    cartItems={apiData}
                    onRemoveItem={onRemoveItem}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                  />
                </AppCard>
              </Grid>
              <Grid item xs={12} md={4}>
                <OrderSummary cartItems={apiData} />
              </Grid>
            </AppGridContainer>
          </Box>
        </AppAnimate>
      )}
    </>
  );
};

export default Carts;
