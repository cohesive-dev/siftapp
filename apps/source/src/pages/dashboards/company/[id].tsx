import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const CRM = asyncComponent(() => import('../../../modules/dashboards/CRM'));
export default AppPage(() => <CRM />);
