import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider} from '@emotion/react';
import AppContextProvider from '@sift/context/AppContextProvider';
import AppThemeProvider from '@sift/context/AppThemeProvider';
import AppStyleProvider from '@sift/context/AppStyleProvider';
import AppLocaleProvider from '@sift/context/AppLocaleProvider';
import AppAuthProvider from '../core/AppAuthProvider';
import AuthRoutes from '@sift/components/AuthRoutes';

import '@sift/mockapi';
import '../../public/styles/vendors/index.css';
import AppPageMeta from '@sift/components/AppPageMeta';
import InfoViewContextProvider from '@sift/context/InfoViewContextProvider';
import createEmotionCache from "../../createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <AppContextProvider>
        <AppThemeProvider>
          <AppStyleProvider>
            <AppLocaleProvider>
              <InfoViewContextProvider>
                <AppAuthProvider>
                  <AuthRoutes>
                    <CssBaseline />
                    <AppPageMeta />
                    <Component {...pageProps} />
                  </AuthRoutes>
                </AppAuthProvider>
              </InfoViewContextProvider>
            </AppLocaleProvider>
          </AppStyleProvider>
        </AppThemeProvider>
      </AppContextProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
