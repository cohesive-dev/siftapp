import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Lists = asyncComponent(() =>
  import('../../../../modules/muiComponents/dataDisplay/Lists')
);
export default AppPage(() => <Lists />);
