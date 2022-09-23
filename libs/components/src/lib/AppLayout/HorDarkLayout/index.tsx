import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import AppContentView from '../../AppContentView';
import AppFixedFooter from './AppFixedFooter';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import { useLayoutContext } from '@sift/context/LayoutContextProvider';
import AppThemeSetting from '../../AppThemeSetting';
import HorDarkWrapper from './HorDarkWrapper';
import MainContent from './MainContent';
import { LayoutType } from '@sift/constants/AppEnums';
import HorDarkContainer from './HorDarkContainer';
import { useRouter } from 'next/router';
import { RouterConfigData } from '@sift/models/Apps';

type Props = {
  children: React.ReactNode;
  routesConfig: RouterConfigData[];
};
const HorDarkLayout = ({ children, routesConfig }: Props) => {
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
    <HorDarkContainer
      className={clsx({
        boxedLayout: layoutType === LayoutType.BOXED,
        framedLayout: layoutType === LayoutType.FRAMED,
      })}
    >
      <HorDarkWrapper
        className={clsx('horDarkWrapper', {
          appMainFooter: footer && footerType === 'fluid',
          appMainFixedFooter: footer && footerType === 'fixed',
        })}
      >
        <AppSidebar
          routesConfig={routesConfig}
          isNavCollapsed={isNavCollapsed}
          toggleNavCollapsed={toggleNavCollapsed}
        />

        <MainContent>
          <AppHeader
            toggleNavCollapsed={toggleNavCollapsed}
            routesConfig={routesConfig}
          />
          <AppContentView>{children}</AppContentView>
          <AppFixedFooter />
        </MainContent>
        <AppThemeSetting />
      </HorDarkWrapper>
    </HorDarkContainer>
  );
};

export default HorDarkLayout;
