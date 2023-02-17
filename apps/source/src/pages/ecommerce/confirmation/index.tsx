import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Confirmation = asyncComponent(() =>
  import('../../../modules/ecommerce/Confirmation')
);
export default AppPage(() => <Confirmation />);
