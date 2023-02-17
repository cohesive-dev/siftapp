import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Radar = asyncComponent(() =>
  import('../../../../modules/thirdParty/recharts/Radar'),
  { ssr: false }
);
export default AppPage(() => <Radar />);
