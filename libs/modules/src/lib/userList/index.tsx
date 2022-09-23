import React from 'react';
import { RoutePermittedRole } from '@sift/constants/AppEnums';

const Flat = React.lazy(() => import('./Flat'));
const Morden = React.lazy(() => import('./Modern'));
const Standard = React.lazy(() => import('./Standard'));

export const userListConfig = [
  {
    permittedRole: RoutePermittedRole.User,
    path: '/list-type/flat',
    element: <Flat />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/list-type/morden',
    element: <Morden />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/list-type/standard',
    element: <Standard />,
  },
];
