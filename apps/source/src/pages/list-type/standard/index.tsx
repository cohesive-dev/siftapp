import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Standard = asyncComponent(() =>
  import('../../../modules/userList/Standard')
);
export default AppPage(() => <Standard />);
