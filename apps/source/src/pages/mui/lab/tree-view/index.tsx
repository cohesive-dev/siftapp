import React from 'react';
import asyncComponent from '@sift/components/AppAsyncComponent';
import AppPage from '../../../../core/AppLayout/AppPage';

const TreeView = asyncComponent(() =>
  import('../../../../modules/muiComponents/lab/TreeView')
);
export default AppPage(() => <TreeView />);
