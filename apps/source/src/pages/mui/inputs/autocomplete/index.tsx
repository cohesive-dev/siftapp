import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const AutoComplete = asyncComponent(() =>
  import('../../../../modules/muiComponents/inputs/AutoComplete')
);
export default AppPage(() => <AutoComplete />);
