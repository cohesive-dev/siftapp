import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Transitions = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/Transitions')
);
export default AppPage(() => <Transitions />);
