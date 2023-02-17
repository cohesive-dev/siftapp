import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Buttons = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/Buttons')
);
export default AppPage(() => <Buttons />);
