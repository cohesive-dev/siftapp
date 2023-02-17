import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const ButtonGroup = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/ButtonGroup')
);
export default AppPage(() => <ButtonGroup />);
