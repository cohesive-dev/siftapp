import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Accordion = asyncComponent(() =>
  import('../../../../modules/muiComponents/surfaces/Accordion')
);
export default AppPage(() => <Accordion />);
