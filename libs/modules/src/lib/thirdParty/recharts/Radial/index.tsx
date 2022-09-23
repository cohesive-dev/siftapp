import React from 'react';
import SimpleRadialBarChart from './Components/SimpleRadialBarChart';
import SimpleRadialBarChartSource from 'raw-loader!./Components/SimpleRadialBarChart.tsx';
import Grid from '@mui/material/Grid';

import AppComponentCard from '@sift/components/AppComponentCard';
import AppComponentHeader from '@sift/components/AppComponentHeader';
import AppGridContainer from '@sift/components/AppGridContainer';

const Radial = () => {
  return (
    <>
      <AppComponentHeader
        title="Radial Bar Chart"
        refUrl="http://recharts.org/en-US/api/RadialBarChart/"
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title="Simple Radial Bar Chart"
            component={SimpleRadialBarChart}
            source={SimpleRadialBarChartSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Radial;
