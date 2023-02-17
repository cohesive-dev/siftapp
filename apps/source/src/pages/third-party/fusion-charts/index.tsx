import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const FusionCharts = asyncComponent(() => import('../../../modules/thirdParty/fusionCharts'),{ssr:false});
export default AppPage(() => <FusionCharts />);
