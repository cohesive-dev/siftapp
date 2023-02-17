import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Selection = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Selection')
);
export default AppPage(() => <Selection />);
