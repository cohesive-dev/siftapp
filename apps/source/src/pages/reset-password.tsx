import React from 'react';
import AppPage from '../core/AppLayout/DefaultPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const ResetPassword = asyncComponent(() =>
  import('../modules/auth/ForgetPassword/ResetPasswordAwsCognito')
);
export default AppPage(() => <ResetPassword />);
