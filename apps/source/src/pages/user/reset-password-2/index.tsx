import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const ResetPassword = asyncComponent(() =>
  import('../../../modules/userPages/StyledUserPages/ResetPassword')
);
export default AppPage(() => <ResetPassword />);
