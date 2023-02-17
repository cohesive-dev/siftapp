import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Composed = asyncComponent(() =>
  import('../../../../modules/thirdParty/recharts/Composed'),
  { ssr: false }
);
export default AppPage(() => <Composed />);
