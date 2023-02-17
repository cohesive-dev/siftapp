import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Editing = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Editing')
);
export default AppPage(() => <Editing />);
