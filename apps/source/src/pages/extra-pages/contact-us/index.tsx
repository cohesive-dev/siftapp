import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const ContactUs = asyncComponent(() => import('../../../modules/extraPages/ContactUs'));
export default AppPage(() => <ContactUs />);
