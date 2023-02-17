import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Links = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/Links')
);
export default AppPage(() => <Links />);
