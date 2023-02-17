import React from 'react';
import AppPage from '../../../core/AppLayout/AppPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const FroalaEditor = asyncComponent(() => import('../../../modules/thirdParty/froalaEditor'),{ssr:false});
export default AppPage(() => <FroalaEditor />);
