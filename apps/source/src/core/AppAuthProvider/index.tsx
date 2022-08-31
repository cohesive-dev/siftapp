import React from 'react';
import { useInfoViewActionsContext } from '@sift/context/InfoViewContextProvider';
import FirebaseAuthProvider from '@sift/services/auth/FirebaseAuthProvider';

const AppAuthProvider = ({ children }) => {
  const { fetchStart, fetchSuccess, fetchError,showMessage } = useInfoViewActionsContext();

  return (
    <FirebaseAuthProvider
      fetchStart={fetchStart}
      fetchError={fetchError}
      fetchSuccess={fetchSuccess}
      showMessage={showMessage}
    >
      {children}
    </FirebaseAuthProvider>
  );
};

export default AppAuthProvider;
