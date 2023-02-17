import React from 'react';
import AppPage from '../core/AppLayout/DefaultPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const ForgetPassword = asyncComponent(() =>
  import('../modules/auth/ForgetPassword')
);
export default AppPage(() => <ForgetPassword />);
