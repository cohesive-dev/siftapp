import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Badges = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Badges')
);
export default AppPage(() => <Badges />);
