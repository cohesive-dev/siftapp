import React from 'react';
import AppPage from '../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Error500 = asyncComponent(() =>
  import('../../modules/errorPages/Error500')
);
export default AppPage(() => <Error500 />);
