import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Export = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Export')
);
export default AppPage(() => <Export />);
