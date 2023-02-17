import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Orders = asyncComponent(() =>
  import('../../../modules/ecommerce/Orders')
);
export default AppPage(() => <Orders />);
