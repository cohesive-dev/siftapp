import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Line = asyncComponent(() =>
  import('../../../../modules/thirdParty/recharts/Line'),
  { ssr: false }
);
export default AppPage(() => <Line />);
