import React from 'react';
import SimpleRadarChart from './Components/SimpleRadarChart';
import SimpleRadarChartSource from 'raw-loader!./Components/SimpleRadarChart';
import SpecifiedDomainRadarChart from './Components/SpecifiedDomainRadarChart';
import SpecifiedDomainRadarChartSource from 'raw-loader!./Components/SpecifiedDomainRadarChart';
import Grid from '@mui/material/Grid';

import AppComponentCard from '@sift/components/AppComponentCard';
import AppComponentHeader from '@sift/components/AppComponentHeader';
import AppGridContainer from '@sift/components/AppGridContainer';

const Radar = () => {
  return (
    <>
      <AppComponentHeader
        title="Radar Chart"
        refUrl="http://recharts.org/en-US/api/RadarChart"
      />

      <AppGridContainer>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Simple Radar Chart"
            component={SimpleRadarChart}
            source={SimpleRadarChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Specified Domain Radar Chart"
            component={SpecifiedDomainRadarChart}
            source={SpecifiedDomainRadarChartSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Radar;
