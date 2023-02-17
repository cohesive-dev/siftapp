import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Steppers = asyncComponent(() =>
  import('../../../../modules/muiComponents/navigation/Stepper')
);
export default AppPage(() => <Steppers />);
