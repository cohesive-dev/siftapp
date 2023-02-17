import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Columns = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Columns')
);
export default AppPage(() => <Columns />);
