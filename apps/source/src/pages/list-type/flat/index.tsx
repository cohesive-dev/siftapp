import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Flat = asyncComponent(() => import('../../../modules/userList/Flat'));
export default AppPage(() => <Flat />);
