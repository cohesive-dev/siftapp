import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Pagination = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Pagination')
);
export default AppPage(() => <Pagination />);
