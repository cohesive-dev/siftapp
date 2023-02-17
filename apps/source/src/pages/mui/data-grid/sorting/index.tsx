import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Sorting = asyncComponent(() =>
  import('../../../../modules/muiComponents/datagrid/Sorting')
);
export default AppPage(() => <Sorting />);
