import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const ProductDetail = asyncComponent(() =>
  import('../../../../modules/ecommerce/ProductDetail')
);
export default AppPage(() => <ProductDetail />);
