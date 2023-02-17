import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Box = asyncComponent(() =>
  import('../../../../modules/muiComponents/layout/Box')
);
export default AppPage(() => <Box />);
