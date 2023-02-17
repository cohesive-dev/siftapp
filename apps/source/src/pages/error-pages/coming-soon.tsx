import React from 'react';
import AppPage from '../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const ComingSoon = asyncComponent(() =>
  import('../../modules/errorPages/ComingSoon')
);
export default AppPage(() => <ComingSoon />);
