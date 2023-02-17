import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const ClickAwayListener = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/ClickawayListener')
);
export default AppPage(() => <ClickAwayListener />);
