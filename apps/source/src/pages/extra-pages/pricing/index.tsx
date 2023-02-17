import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Pricing = asyncComponent(() =>
  import('../../../modules/extraPages/Pricing')
);
export default AppPage(() => <Pricing />);
