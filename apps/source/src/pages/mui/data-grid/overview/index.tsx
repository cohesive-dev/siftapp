import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Overview = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Overview')
);
export default AppPage(() => <Overview />);
