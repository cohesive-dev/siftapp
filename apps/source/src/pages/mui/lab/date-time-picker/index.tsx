import React from 'react';
import asyncComponent from '@sift/components/AppAsyncComponent';
import AppPage from '../../../../core/AppLayout/AppPage';

const DateTimePicker = asyncComponent(() =>
  import('../../../../modules/muiComponents/lab/DateTimePicker')
);
export default AppPage(() => <DateTimePicker />);
