import React from 'react';
import AppPage from '../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Error404 = asyncComponent(() =>
  import('../../modules/errorPages/Error404')
);
export default AppPage(() => <Error404 />);
