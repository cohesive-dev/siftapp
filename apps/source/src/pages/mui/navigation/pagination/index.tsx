import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Pagination = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/Pagination')
);
export default AppPage(() => <Pagination />);
