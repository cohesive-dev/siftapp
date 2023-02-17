import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const FAQ = asyncComponent(() => import('../../../modules/extraPages/FAQ'));
export default AppPage(() => <FAQ />);
