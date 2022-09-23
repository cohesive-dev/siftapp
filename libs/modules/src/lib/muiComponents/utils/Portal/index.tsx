import React from 'react';
import AppComponentHeader from '@sift/components/AppComponentHeader';
import AppGridContainer from '@sift/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@sift/components/AppComponentCard';

import SimplePortal from './SimplePortal';

import SimplePortalSource from 'raw-loader!./SimplePortal';

const Portal = () => {
  return (
    <>
      <AppComponentHeader
        title="Portal"
        description='The portal component renders its children into a new "subtree" outside of current DOM hierarchy.'
        refUrl="https://mui.com/components/portal/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="SimplePortal"
            component={SimplePortal}
            source={SimplePortalSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Portal;
