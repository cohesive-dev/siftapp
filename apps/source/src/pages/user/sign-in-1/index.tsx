import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Signin = asyncComponent(() =>
  import('../../../modules/userPages/UserPages/Signin')
);
export default AppPage(() => <Signin />);
