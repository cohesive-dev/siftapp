import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Contact = asyncComponent(() => import('../../../modules/apps/Contact'));
export default AppPage(() => <Contact />);
