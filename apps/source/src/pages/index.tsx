// import React from 'react';
import AppPage from '../core/AppLayout/DefaultPage';
import asyncComponent from '@sift/components/AppAsyncComponent';

const SignIn = asyncComponent(() => import('../modules/auth/Signin'));
export default AppPage(() => <SignIn />);
// import React from 'react';
//
// const Index = () => {
//   return (
//     <div>
//       hi
//     </div>
//   );
// };
//
// export default Index;
