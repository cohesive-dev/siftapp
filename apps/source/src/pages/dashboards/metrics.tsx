import React from 'react';
import AppPage from '../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Metrics = asyncComponent(() =>
  import('../../modules/dashboards/Metrics')
);
export default AppPage(() => <Metrics />);
