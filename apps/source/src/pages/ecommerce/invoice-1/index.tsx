import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Invoice1 = asyncComponent(() =>
  import('../../../modules/ecommerce/Invoice1')
);
export default AppPage(() => <Invoice1 />);
