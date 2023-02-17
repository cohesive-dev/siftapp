import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Styling = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Styling')
);
export default AppPage(() => <Styling />);
