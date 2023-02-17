import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Customers = asyncComponent(() =>
  import('../../../modules/ecommerce/Customers')
);
export default AppPage(() => <Customers />);
