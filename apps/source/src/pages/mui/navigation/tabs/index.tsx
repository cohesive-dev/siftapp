import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Tabs = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/Tabs')
);
export default AppPage(() => <Tabs />);
