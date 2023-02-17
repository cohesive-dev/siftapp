import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Drawers = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/Drawer')
);
export default AppPage(() => <Drawers />);
