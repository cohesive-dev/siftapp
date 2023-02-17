import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Scatter = asyncComponent(() =>
  import('../../../../modules/thirdParty/recharts/Scatter'),
  { ssr: false }
);
export default AppPage(() => <Scatter />);
