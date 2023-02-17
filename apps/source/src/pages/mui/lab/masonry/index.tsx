import React from 'react';
import asyncComponent from '@sift/components/AppAsyncComponent';
import AppPage from '../../../../core/AppLayout/AppPage';

const Masonry = asyncComponent(() =>
  import('../../../../modules/muiComponents/lab/Masonry')
);
export default AppPage(() => <Masonry />);
