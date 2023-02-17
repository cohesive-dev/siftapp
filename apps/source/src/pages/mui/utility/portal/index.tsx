import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Portal = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/Portal')
);
export default AppPage(() => <Portal />);
