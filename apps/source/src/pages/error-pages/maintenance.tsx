import React from 'react';
import AppPage from '../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Maintenance = asyncComponent(() =>
  import('../../modules/errorPages/Maintenance')
);
export default AppPage(() => <Maintenance />);
