import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const BreadCrumbs = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/Breadcrumbs')
);
export default AppPage(() => <BreadCrumbs />);
