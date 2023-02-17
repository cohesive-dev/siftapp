import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const MediaQuery = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/MediaQuery')
);
export default AppPage(() => <MediaQuery />);
