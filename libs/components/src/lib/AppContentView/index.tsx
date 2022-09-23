import React, { ReactNode } from 'react';
import AppSuspense from '../AppSuspense';
import AppFooter from '../AppLayout/components/AppFooter';
import AppErrorBoundary from '../AppErrorBoundary';
import Box from '@mui/material/Box';
import AppContentViewWrapper from './AppContentViewWrapper';

type AppContentViewProps = {
  children: ReactNode;
};

const AppContentView: React.FC<AppContentViewProps> = ({
  children,
  sxStyle,
}) => {
  return (
    <AppContentViewWrapper>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          p: { xs: 5, md: 7.5, xl: 12.5 },
          ...sxStyle,
        }}
        className="app-content"
      >
        <AppSuspense>
          <AppErrorBoundary>{children}</AppErrorBoundary>
        </AppSuspense>
      </Box>
      <AppFooter />
    </AppContentViewWrapper>
  );
};

export default AppContentView;
