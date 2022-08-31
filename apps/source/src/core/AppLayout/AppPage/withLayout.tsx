import React, {useEffect} from 'react';
import {Layouts} from '@sift/components/AppLayout';
import {useLayoutActionsContext, useLayoutContext} from '@sift/context/LayoutContextProvider';
import routesConfig from '../../AppRoutes/routeConfig';
import {useSidebarActionsContext} from "@sift/context/SidebarContextProvider";
import {useRouter} from "next/router";

// eslint-disable-next-line react/display-name
const withLayout = (ComposedComponent) => (props) => {
  const { navStyle } = useLayoutContext();
  const AppLayout = Layouts[navStyle];

  const {updateNavStyle} = useLayoutActionsContext();
  const {updateMenuStyle, setSidebarBgImage} = useSidebarActionsContext();
  const router = useRouter()

  useEffect(() => {
    if (router.query.layout) updateNavStyle(router.query.layout as string);
    if (router.query.menuStyle) updateMenuStyle(router.query.menuStyle as string);
    if (router.query.sidebarImage) setSidebarBgImage(true);
  }, []);

  return (
    <AppLayout routesConfig={routesConfig}>
      <ComposedComponent {...props} />
    </AppLayout>
  );
};

export default withLayout;
