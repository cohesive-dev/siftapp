import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const ReactNotification = asyncComponent(() =>
  import('../../../modules/thirdParty/reactNotification'),
  { ssr: false }
);
export default AppPage(() => <ReactNotification />);
