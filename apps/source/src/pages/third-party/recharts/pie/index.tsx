import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Pie = asyncComponent(() =>
  import('../../../../modules/thirdParty/recharts/Pie'),
  { ssr: false }
);
export default AppPage(() => <Pie />);
