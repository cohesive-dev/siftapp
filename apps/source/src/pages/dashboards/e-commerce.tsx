import React from 'react';
import AppPage from '../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const ECommerce = asyncComponent(() =>
  import('../../modules/dashboards/ECommerce')
);
export default AppPage(() => <ECommerce />);
