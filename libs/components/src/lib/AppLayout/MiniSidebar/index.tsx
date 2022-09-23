import React, { useEffect, useState } from 'react';
import AppSidebar from './AppSidebar';
import AppContentView from '../../AppContentView';
import AppThemeSetting from '../../AppThemeSetting';
import AppHeader from './AppHeader';
import clsx from 'clsx';
import Box from '@mui/material/Box';
import MiniSidebarWrapper from './MiniSidebarWrapper';
import AppFixedFooter from './AppFixedFooter';
import { useLayoutContext } from '@sift/context/LayoutContextProvider';
import { LayoutType } from '@sift/constants/AppEnums';
import MiniSidebarContainer from './MiniSidebarContainer';
import { useRouter } from 'next/router';
import { RouterConfigData } from '@sift/models/Apps';

type Props = {
  children: React.ReactNode;
  routesConfig: RouterConfigData[];
};
const MiniSidebar = ({ children, routesConfig }: Props) => {
  const { footer, layoutType, headerType, footerType } = useLayoutContext();
  const { pathname } = useRouter();
  const [isNavCollapsed, setNavCollapsed] = useState(false);
  const toggleNavCollapsed = () => {
    setNavCollapsed(!isNavCollapsed);
  };
  useEffect(() => {
    if (isNavCollapsed) setNavCollapsed(!isNavCollapsed);
  }, [pathname]);

  return (
    <MiniSidebarContainer
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        framedLayout: layoutType === LayoutType.FRAMED,
      })}
    >
      <MiniSidebarWrapper
        className={clsx('miniSidebarWrapper', {
          'mini-sidebar-collapsed': isNavCollapsed,
          appMainFooter: footer && footerType === 'fluid',
          appMainFixedFooter: footer && footerType === 'fixed',
          appMainFixedHeader: headerType === 'fixed',
        })}
      >
        <AppSidebar
          routesConfig={routesConfig}
          isNavCollapsed={isNavCollapsed}
          toggleNavCollapsed={toggleNavCollapsed}
        />
        <Box className="mainContent">
          <AppHeader toggleNavCollapsed={toggleNavCollapsed} />
          <AppContentView>{children}</AppContentView>
          <AppFixedFooter />
        </Box>
        <AppThemeSetting />
      </MiniSidebarWrapper>
    </MiniSidebarContainer>
  );
};

export default MiniSidebar;
