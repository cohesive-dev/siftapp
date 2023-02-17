import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Todo = asyncComponent(() => import('../../../modules/apps/ToDo'),
  { ssr: false });
export default AppPage(() => <Todo />);
