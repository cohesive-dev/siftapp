import React, { ReactNode } from 'react';
import AppLoader from './AppLoader';
import PropTypes from 'prop-types';
import { useAuthUser } from '@sift/hooks/AuthHooks';

type AuthRoutesProps= {
  children: ReactNode;
}

const AuthRoutes: React.FC<AuthRoutesProps> = ({ children }) => {
  const { isLoading } = useAuthUser();
  return isLoading ? <AppLoader /> : <>{children}</>;
};

export default AuthRoutes;

AuthRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
