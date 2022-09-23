import React from 'react';
import AppCard from '@sift/components/AppCard';
import AppGridContainer from '@sift/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import PackageCard from './PackageCard';
import { PricingObj } from '@sift/fakedb/extraPages';

type PackageFourProps = {
  pricing: PricingObj[];
};

const PackageFour: React.FC<PackageFourProps> = ({ pricing }) => {
  return (
    <AppCard title="Pricing Package Style 4" sxStyle={{ alignItems: 'center' }}>
      <AppGridContainer
        sx={{
          maxWidth: 1000,
          justifyContent: 'center',
        }}
      >
        {pricing.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PackageCard pricing={data} />
          </Grid>
        ))}
      </AppGridContainer>
    </AppCard>
  );
};

export default PackageFour;
