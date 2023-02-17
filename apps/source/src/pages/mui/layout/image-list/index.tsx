import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const ImageList = asyncComponent(() =>
  import('../../../../modules/muiComponents/layout/ImageList')
);
export default AppPage(() => <ImageList />);
