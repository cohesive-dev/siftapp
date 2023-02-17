import React from 'react';
import AppPage from '../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Widgets = asyncComponent(() =>
  import('../../modules/dashboards/Widgets')
);
export default AppPage(() => <Widgets />);
