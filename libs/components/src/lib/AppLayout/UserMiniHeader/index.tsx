import React, { useEffect, useState } from 'react';
import AppSidebar from './AppSidebar';
import AppContentView from '../../AppContentView';
import AppThemeSetting from '../../AppThemeSetting';
import AppHeader from './AppHeader';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import UserMiniHeaderWrapper from './UserMiniHeaderWrapper';
import AppFixedFooter from './AppFixedFooter';
import { useLayoutContext } from '@sift/context/LayoutContextProvider';
import { LayoutType } from '@sift/constants/AppEnums';
import UserMiniHeaderContainer from './UserMiniHeaderContainer';
import { useRouter } from 'next/router';
import { RouterConfigData } from '@sift/models/Apps';

type Props = {
  children: React.ReactNode;
  routesConfig: RouterConfigData[];
};
const UserMiniHeader = ({ children, routesConfig }: Props) => {
  const { footer, layoutType, footerType } = useLayoutContext();
  const { pathname } = useRouter();
  const [isNavCollapsed, setNavCollapsed] = useState(false);
  const toggleNavCollapsed = () => {
    setNavCollapsed(!isNavCollapsed);
  };
  useEffect(() => {
    if (isNavCollapsed) setNavCollapsed(!isNavCollapsed);
  }, [pathname]);

  return (
    <UserMiniHeaderContainer
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        framedLayout: layoutType === LayoutType.FRAMED,
      })}
    >
      <UserMiniHeaderWrapper
        className={clsx('mini-sidebar-collapsed', {
          appMainFooter: footer && footerType === 'fluid',
          appMainFixedFooter: footer && footerType === 'fixed',
        })}
      >
        <AppHeader toggleNavCollapsed={toggleNavCollapsed} />
        <Box className="mainContent">
          <AppSidebar
            routesConfig={routesConfig}
            isNavCollapsed={isNavCollapsed}
            toggleNavCollapsed={toggleNavCollapsed}
          />
          <AppContentView>{children}</AppContentView>
          <AppFixedFooter />
        </Box>
        <AppThemeSetting />
      </UserMiniHeaderWrapper>
    </UserMiniHeaderContainer>
  );
};

export default UserMiniHeader;
