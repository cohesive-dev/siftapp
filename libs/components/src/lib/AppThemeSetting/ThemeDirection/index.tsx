import React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import { CustomizerItemWrapper } from '../index.style';
import IntlMessages from '@sift/helpers/IntlMessages';
import { LayoutDirection } from '@sift/constants/AppEnums';
import {
  useThemeActionsContext,
  useThemeContext,
} from '@sift/context/ThemeContextProvider';

const ThemeDirection = () => {
  const { theme } = useThemeContext();
  const { updateTheme } = useThemeActionsContext();

  const onChangeRtlSetting = (event: React.ChangeEvent<HTMLInputElement>) => {
    theme.direction = event.target.checked
      ? LayoutDirection.RTL
      : LayoutDirection.LTR;
    updateTheme({ ...theme });
  };

  return (
    <CustomizerItemWrapper>
      <Box display="flex" alignItems="center">
        <Box component="h4">
          <IntlMessages id="customizer.rtlSupport" />
        </Box>
        <Box component="span" ml="auto">
          <Switch
            checked={theme.direction === LayoutDirection.RTL}
            onChange={onChangeRtlSetting}
            value="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </Box>
      </Box>
    </CustomizerItemWrapper>
  );
};

export default ThemeDirection;
