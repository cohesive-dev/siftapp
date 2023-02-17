import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Popover = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/Popover')
);
export default AppPage(() => <Popover />);
