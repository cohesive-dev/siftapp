import React from 'react';
import AppPage from '../core/AppLayout/DefaultPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const ConfirmSignup = asyncComponent(() =>
  import('../modules/auth/Signup/ConfirmSignupAwsCognito')
);
export default AppPage(() => <ConfirmSignup />);
