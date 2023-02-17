import React from 'react';
import AppPage from '../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Error403 = asyncComponent(() =>
  import('../../modules/errorPages/Error403')
);
export default AppPage(() => <Error403 />);
