import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const RadiosButton = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/Radio')
);
export default AppPage(() => <RadiosButton />);
