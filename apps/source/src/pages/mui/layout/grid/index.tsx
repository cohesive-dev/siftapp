import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Grid = asyncComponent(() =>
  import('../../../../modules/muiComponents/layout/Grid')
);
export default AppPage(() => <Grid />);
