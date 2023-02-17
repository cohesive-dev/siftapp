import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Tooltip = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Tooltip')
);
export default AppPage(() => <Tooltip />);
