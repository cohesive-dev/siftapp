import React from 'react';
import MapChart from './MapChart';
import { Box } from '@mui/material';

const MapView = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: 200,
      }}
    >
      <MapChart />
    </Box>
  );
};

export default MapView;
