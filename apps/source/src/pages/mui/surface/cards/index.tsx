import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Cards = asyncComponent(() =>
  import('../../../../modules/muiComponents/surfaces/Card')
);
export default AppPage(() => <Cards />);
