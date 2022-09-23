import React from 'react';
import SimpleTreemap from './Components/SimpleTreemap';
import SimpleTreemapSource from 'raw-loader!./Components/SimpleTreemap';
import CustomContentTreemap from './Components/CustomContentTreemap';
import CustomContentTreemapSource from 'raw-loader!./Components/CustomContentTreemap';
import Grid from '@mui/material/Grid';

import AppComponentCard from '@sift/components/AppComponentCard';
import AppComponentHeader from '@sift/components/AppComponentHeader';
import AppGridContainer from '@sift/components/AppGridContainer';

const Treemap = () => {
  return (
    <>
      <AppComponentHeader
        title="Treemap"
        refUrl="http://recharts.org/en-US/api/Treemap/"
      />

      <AppGridContainer>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Simple Tree map"
            component={SimpleTreemap}
            source={SimpleTreemapSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Custom Content Treemap"
            component={CustomContentTreemap}
            source={CustomContentTreemapSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Treemap;
