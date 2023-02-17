import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Chat = asyncComponent(() => import('../../../modules/apps/Chat'));
export default AppPage(() => <Chat />);
