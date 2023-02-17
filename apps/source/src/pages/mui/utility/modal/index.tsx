import React from 'react';
import AppPage from '../../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const Modal = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/Modal')
);
export default AppPage(() => <Modal />);
