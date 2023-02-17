import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Radial = asyncComponent(() =>
  import('../../../../modules/thirdParty/recharts/Radial'),
  { ssr: false }
);
export default AppPage(() => <Radial />);
