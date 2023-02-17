import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Analytics = asyncComponent(() =>
  import('../../../modules/dashboards/Analytics')
);
export default AppPage(() => <Analytics />);
