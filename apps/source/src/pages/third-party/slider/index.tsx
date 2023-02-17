import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const TimeLine = asyncComponent(() =>
  import('../../../modules/thirdParty/reactSlick'),
  { ssr: false }
);
export default AppPage(() => <TimeLine />);
