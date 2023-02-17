import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const SpeedDial = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/SpeedDial')
);
export default AppPage(() => <SpeedDial />);
