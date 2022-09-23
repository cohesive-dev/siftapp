import React from 'react';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import Box from '@mui/material/Box';
import AppTooltip from '@sift/components/AppTooltip';
import { LabelType } from '@sift/models/apps/Todo';

type Props = {
  labels: LabelType[];
};
const Labels = ({ labels }: Props) => {
  return (
    <Box
      className="labelIcon"
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {labels?.map((label) => {
        return (
          <AppTooltip title={label.name} placement="top" key={label.id}>
            <LabelOutlinedIcon
              sx={{
                color: `${label.color}`,
                marginRight: 2.5,
                display: 'block',
              }}
            />
          </AppTooltip>
        );
      })}
    </Box>
  );
};

export default Labels;
