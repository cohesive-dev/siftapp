import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Checkboxes = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/Checkboxes')
);
export default AppPage(() => <Checkboxes />);
