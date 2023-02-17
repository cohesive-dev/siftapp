import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Morden = asyncComponent(() => import('../../../modules/userList/Modern'));
export default AppPage(() => <Morden />);
