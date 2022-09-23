import React from 'react';
import AppLogo from '../AppLayout/components/AppLogo';
import PropTypes from 'prop-types';
import { useSidebarContext } from '@sift/context/SidebarContextProvider';
import SidebarHeaderWrapper from './SidebarHeaderWrapper';
import SidebarUserInfo from './SidebarUserInfo';

const SidebarHeader = () => {
  const { sidebarTextColor } = useSidebarContext();

  return (
    <SidebarHeaderWrapper>
      <AppLogo color={sidebarTextColor} />
      <SidebarUserInfo />
    </SidebarHeaderWrapper>
  );
};

export default SidebarHeader;
SidebarHeader.propTypes = {
  setShowMessage: PropTypes.func,
  setShowNotification: PropTypes.func,
};
