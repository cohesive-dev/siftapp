import React from 'react';
import asyncComponent from '@sift/components/AppAsyncComponent';
import AppPage from '../../../../core/AppLayout/AppPage';

const Timeline = asyncComponent(() =>
  import('../../../../modules/muiComponents/lab/Timeline')
);
export default AppPage(() => <Timeline />);
