import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const AppBar = asyncComponent(() =>
  import('../../../../modules/muiComponents/surfaces/AppBar')
);
export default AppPage(() => <AppBar />);
