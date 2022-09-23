import React from 'react';
import { useThemeContext } from '@sift/context/ThemeContextProvider';
import { alpha, Box } from '@mui/material';
import { ReactComponent as Logo } from '../../../../assets/icon/sift.svg';

type AppLogoProps = {
  color?: string;
};

const AppLogo: React.FC<AppLogoProps> = ({ color }) => {
  const { theme } = useThemeContext();

  return (
    <Box
      sx={{
        height: { xs: 56, sm: 70 },
        padding: 2.5,
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '& svg': {
          height: { xs: 40, sm: 45 },
          transform: 'scale(0.8)'
        },
      }}
      className="app-logo"
    >
      <Logo fill="purple" />
    </Box>
  );
};

export default AppLogo;
