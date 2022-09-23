import React, { memo } from 'react';
import Box from '@mui/material/Box';

type AppAnimateProps = {
  [x: string]: any;
};

const AppAnimateGroup: React.FC<AppAnimateProps> = (props) => {
  return <Box {...props}>{props.children}</Box>;
};
export default memo(AppAnimateGroup);
