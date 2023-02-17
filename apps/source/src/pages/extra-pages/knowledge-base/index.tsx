import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const KnowledgeBase = asyncComponent(() =>
  import('../../../modules/extraPages/KnowledgeBase')
);
export default AppPage(() => <KnowledgeBase />);
