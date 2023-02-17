import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Signup = asyncComponent(() =>
  import('../../../modules/userPages/StyledUserPages/Signup')
);
export default AppPage(() => <Signup />);
