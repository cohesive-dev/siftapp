import React from 'react';
import Grid from '@mui/material/Grid';
import AppGridContainer from '@sift/components/AppGridContainer';
import AppAnimate from '@sift/components/AppAnimate';

import {
  Introduction,
  Sections,
  Team,
} from '@sift/modules/extraPages/AboutUs';
import { AboutUsData, aboutUsData } from '@sift/fakedb/extraPages';
import Box from '@mui/material/Box';

const AboutUs = () => {
  const brandingData = aboutUsData.find(
    (about) => about.alias === 'branding'
  ) as AboutUsData;
  const photoGraphyData = aboutUsData.find(
    (about) => about.alias === 'photography'
  ) as AboutUsData;
  const seoData = aboutUsData.find(
    (about) => about.alias === 'seo'
  ) as AboutUsData;

  return (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <Box flex={1}>
        <AppGridContainer>
          <Grid item xs={12} md={12}>
            <Introduction />
          </Grid>

          <Grid item xs={12} md={4}>
            <Sections data={brandingData} />
          </Grid>

          <Grid item xs={12} md={4}>
            <Sections data={photoGraphyData} />
          </Grid>

          <Grid item xs={12} md={4}>
            <Sections data={seoData} />
          </Grid>

          <Grid item xs={12} md={12}>
            <Team />
          </Grid>
        </AppGridContainer>
      </Box>
    </AppAnimate>
  );
};

export default AboutUs;
