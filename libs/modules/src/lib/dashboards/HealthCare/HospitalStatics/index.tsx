import React from 'react';
import AppCard from '@sift/components/AppCard';
import { Box, Typography } from '@mui/material';
import { DosesType } from '@sift/models/dashboards/HealthCare';

type HospitalStaticsProps = {
  data: DosesType;
};

const HospitalStatics: React.FC<HospitalStaticsProps> = ({ data }) => {
  const { bgColor, icon, value, name } = data;
  return (
    <AppCard
      sxStyle={{
        height: 1,
        backgroundColor: bgColor,
      }}
      className="card-hover"
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            mr: 4,
            alignSelf: 'flex-start',
          }}
        >
          <img src={icon} alt="icon" />
        </Box>
        <Box
          sx={{
            width: 'calc(100% - 70px)',
          }}
        >
          <Typography
            component="h5"
            variant="inherit"
            color="inherit"
            sx={{
              fontSize: 16,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              width: '100%',
            }}
          >
            {value}
          </Typography>
          <Box
            component="p"
            sx={{
              pt: 0.5,
              color: 'text.secondary',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              width: '100%',
            }}
          >
            {name}
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default HospitalStatics;
