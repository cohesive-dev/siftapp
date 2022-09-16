import React, { useEffect } from 'react';
import AppCard from '@sift/components/AppCard';
import AppGridContainer from '@sift/components/AppGridContainer';

import AppAnimate from '@sift/components/AppAnimate';
import { useRouter } from 'next/router';
import AppInfoView from '@sift/components/AppInfoView';
import { useGetDataApi } from '@sift/hooks/APIHooks';
import {
  Header,
  ProductImageSlide,
  ProductView,
  SimilarProduct,
} from '@sift/modules/ecommerce/ProductDetail';
import AppLoader from '@sift/components/AppLoader';
import { ProductDataType } from '@sift/models/ecommerce/EcommerceApp';

const ProductDetail = () => {
  const { query } = useRouter();
  const [{ apiData: currentProduct, loading }, { setQueryParams }] =
    useGetDataApi<ProductDataType>('/api/ecommerce/get');

  useEffect(() => {
    setQueryParams({ id: query.id });
  }, [query.id]);

  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppAnimate animation="transition.slideUpIn" delay={200}>
          <AppCard>
            <Header product={currentProduct} />
            <AppGridContainer>
              <ProductImageSlide product={currentProduct} />
              <ProductView product={currentProduct} />
            </AppGridContainer>
            <SimilarProduct />
          </AppCard>
        </AppAnimate>
      )}
      <AppInfoView />
    </>
  );
};

export default ProductDetail;
