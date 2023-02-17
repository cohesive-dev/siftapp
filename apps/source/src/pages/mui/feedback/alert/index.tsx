import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Alert = asyncComponent(() =>
  import('../../../../modules/muiComponents/feedback/Alert')
);
export default AppPage(() => <Alert />);
