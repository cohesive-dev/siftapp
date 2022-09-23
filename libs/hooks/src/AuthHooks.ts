/*// ForJWT Auth
import { getUserFromJwtAuth } from '@sift/helpers/AuthHelper';
import {
  useJWTAuth,
  useJWTAuthActions,
} from '@sift/services/auth/JWTAuthProvider';

export const useAuthUser = () => {
  const {user, isAuthenticated, isLoading} = useJWTAuth();
  return {
    isLoading,
    isAuthenticated,
    user: getUserFromJwtAuth(user),
  };
};

export const useAuthMethod = () => {
  const {signInUser, signUpUser, logout} = useJWTAuthActions();

  return {
    signInUser,
    logout,
    signUpUser,
  };
};*/
//For Firebase Auth

import {
  useFirebase,
  useFirebaseActions,
} from '@sift/services/auth/FirebaseAuthProvider';
import { getUserFromFirebase } from '@sift/helpers';

export const useAuthUser = () => {
  const { user, isAuthenticated, isLoading } = useFirebase();
  return {
    isLoading,
    isAuthenticated,
    user: getUserFromFirebase(user),
  };
};

export const useAuthMethod = () => {
  const {
    logInWithEmailAndPassword,
    registerUserWithEmailAndPassword,
    logInWithPopup,
    logout,
  } = useFirebaseActions();

  return {
    logInWithEmailAndPassword,
    registerUserWithEmailAndPassword,
    logInWithPopup,
    logout,
  };
};
/*
// For AWS Auth
import { getUserFromAWS } from '@sift/helpers/AuthHelper';
import {
  useAwsCognito,
  useAwsCognitoActions,
} from '@sift/services/auth/AWSAuthProvider';

export const useAuthUser = () => {
  const { auth, user, isAuthenticated, isLoading } = useAwsCognito();
  return {
    auth,
    isLoading,
    isAuthenticated,
    user: getUserFromAWS(user),
  };
};

export const useAuthMethod = () => {
  const { signIn, signUpCognitoUser, confirmCognitoUserSignup, logout } =
    useAwsCognitoActions();

  return {
    signIn,
    signUpCognitoUser,
    confirmCognitoUserSignup,
    logout,
  };
};*/
/*

//For Auth0
import { useAuth0 } from '@auth0/auth0-react';
import { useMemo } from 'react';
import { getUserFromAuth0 } from '@sift/helpers/AuthHelper';

export const useAuthUser = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return {
    isLoading,
    isAuthenticated,
    user: useMemo(() => getUserFromAuth0(user), []),
  };
};

export const useAuthMethod = () => {
  const { loginWithRedirect, logout } = useAuth0();
  return { loginWithRedirect, logout };
};
*/
