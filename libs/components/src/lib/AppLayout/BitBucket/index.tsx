import React, { useEffect, useState } from 'react';
import AppSidebar from './AppSidebar';
import AppContentView from '../../AppContentView';
import AppThemeSetting from '../../AppThemeSetting';
import AppHeader from './AppHeader';
import clsx from 'clsx';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/material/Box';
import BitBucketWrapper from './BitBucketWrapper';
import { LayoutType } from '@sift/constants/AppEnums';
import { useLayoutContext } from '@sift/context/LayoutContextProvider';
import BitBucketContainer from './BitBucketContainer';
import { useRouter } from 'next/router';
import { RouterConfigData } from '@sift/models/Apps';

type Props = {
  children: React.ReactNode;
  routesConfig: RouterConfigData[];
};
const BitBucket = ({ children, routesConfig }: Props) => {
  const { layoutType } = useLayoutContext();
  const { pathname } = useRouter();
  const [isNavCollapsed, setNavCollapsed] = useState(false);
  const toggleNavCollapsed = () => {
    setNavCollapsed(!isNavCollapsed);
  };
  useEffect(() => {
    if (isNavCollapsed) setNavCollapsed(!isNavCollapsed);
  }, [pathname]);

  return (
    <BitBucketContainer
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        framedLayout: layoutType === LayoutType.FRAMED,
      })}
    >
      <BitBucketWrapper
        className={clsx('bitBucketWrapper', {
          bitBucketCollapsed: isNavCollapsed,
        })}
      >
        <Hidden lgUp>
          <AppHeader toggleNavCollapsed={toggleNavCollapsed} />
        </Hidden>
        <AppSidebar
          routesConfig={routesConfig}
          isNavCollapsed={isNavCollapsed}
          toggleNavCollapsed={toggleNavCollapsed}
        />
        <Box className="mainContent">
          <AppContentView>{children}</AppContentView>
        </Box>
        <AppThemeSetting />
      </BitBucketWrapper>
    </BitBucketContainer>
  );
};

export default BitBucket;
