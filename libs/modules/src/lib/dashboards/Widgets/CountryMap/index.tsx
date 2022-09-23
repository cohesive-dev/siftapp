import React from 'react';
import { Box } from '@mui/material';
import MapChart from './MapChart';
import AppCard from '@sift/components/AppCard';
import { useIntl } from 'react-intl';

const CountryMap = () => {
  const { messages } = useIntl();
  return (
    <AppCard
      contentStyle={{
        display: 'flex',
        flexDirection: 'column',
      }}
      sxStyle={{ height: 1 }}
      title={messages['dashboard.usa'] as string}
      action={messages['common.next'] as string}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <MapChart />
      </Box>
    </AppCard>
  );
};

export default CountryMap;
