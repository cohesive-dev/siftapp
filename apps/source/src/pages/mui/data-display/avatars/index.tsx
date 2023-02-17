import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Avatars = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Avatar')
);
export default AppPage(() => <Avatars />);
