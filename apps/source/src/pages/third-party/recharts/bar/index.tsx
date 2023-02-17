import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Bar = asyncComponent(() =>
  import('../../../../modules/thirdParty/recharts/Bar'),
  { ssr: false }
);
export default AppPage(() => <Bar />);
