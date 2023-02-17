import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Filtering = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Filtering')
);
export default AppPage(() => <Filtering />);
