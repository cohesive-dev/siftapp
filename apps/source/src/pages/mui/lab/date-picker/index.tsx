import React from 'react';
import asyncComponent from '@sift/components/AppAsyncComponent';
import AppPage from '../../../../core/AppLayout/AppPage';

const DatePicker = asyncComponent(() =>
  import('../../../../modules/muiComponents/lab/DatePicker')
);
export default AppPage(() => <DatePicker />);
