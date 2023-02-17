import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const BottomNavigation = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/BottomNavigation')
);
export default AppPage(() => <BottomNavigation />);
