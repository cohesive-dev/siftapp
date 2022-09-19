import React from 'react';
import { Grid } from '@mui/material';
import AppGridContainer from '@sift/components/AppGridContainer';

import {
  PackageFour,
  PackageOne,
  PackageThree,
  PackageTwo,
} from '@sift/modules/extraPages/Pricing';
import { pricingData } from '@sift/fakedb/extraPages';

const Pricing = () => {
  return (
    <AppGridContainer>
      <Grid item xs={12}>
        <PackageOne pricing={pricingData.pricingOne} />
      </Grid>
      <Grid item xs={12}>
        <PackageTwo pricing={pricingData.pricingTwo} />
      </Grid>
      <Grid item xs={12}>
        <PackageThree pricing={pricingData.pricingFour} />
      </Grid>
      <Grid item xs={12}>
        <PackageFour pricing={pricingData.pricingFour} />
      </Grid>
    </AppGridContainer>
  );
};

export default Pricing;
