import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Area = asyncComponent(
  () => import('../../../../modules/thirdParty/recharts/Area'),
  { ssr: false }
);
export default AppPage(() => <Area />);
