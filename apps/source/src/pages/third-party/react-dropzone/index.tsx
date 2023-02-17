import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const ReactDropzone = asyncComponent(() =>
  import('../../../modules/thirdParty/reactDropzone'),
  { ssr: false }
);
export default AppPage(() => <ReactDropzone />);
