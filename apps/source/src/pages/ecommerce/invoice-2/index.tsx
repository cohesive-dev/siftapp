import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Invoice2 = asyncComponent(() =>
  import('../../../modules/ecommerce/Invoice2')
);
export default AppPage(() => <Invoice2 />);
