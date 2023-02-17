import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Funnel = asyncComponent(() =>
  import('../../../../modules/thirdParty/recharts/Funnel'),
  { ssr: false }
);
export default AppPage(() => <Funnel />);
