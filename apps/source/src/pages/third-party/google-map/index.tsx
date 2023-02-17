import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const GoogleMap = asyncComponent(() =>
  import('../../../modules/thirdParty/googleMap'),
  { ssr: false }
);
export default AppPage(() => <GoogleMap />);
