import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Typography = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Typography')
);
export default AppPage(() => <Typography />);
