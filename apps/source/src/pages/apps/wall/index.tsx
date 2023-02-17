import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Wall = asyncComponent(() => import('../../../modules/apps/Wall'));
export default AppPage(() => <Wall />);
