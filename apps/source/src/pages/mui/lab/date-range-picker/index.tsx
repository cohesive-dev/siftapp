import React from 'react';
import asyncComponent from '@sift/components/AppAsyncComponent';
import AppPage from '../../../../core/AppLayout/AppPage';

const DateRangePicker = asyncComponent(() =>
  import('../../../../modules/muiComponents/lab/DateRangePicker')
);
export default AppPage(() => <DateRangePicker />);
