import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Backdrop = asyncComponent(() =>
  import('../../../../modules/muiComponents/feedback/Backdrop')
);
export default AppPage(() => <Backdrop />);
