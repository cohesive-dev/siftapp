import React from 'react';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import AppScrollbar from '@sift/components/AppScrollbar';
import { Fonts } from '@sift/constants/AppEnums';
import AppCard from '@sift/components/AppCard';
import { InstallationData } from '@sift/fakedb/extraPages';

type KbItemProps = {
  data: InstallationData;
};

const KbItem: React.FC<KbItemProps> = ({ data }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <AppCard>
        <Box
          component="h5"
          sx={{ mb: 2, fontSize: 16, fontWeight: Fonts.MEDIUM }}
        >
          {data.ques}
        </Box>
        <AppScrollbar
          sx={{
            padding: 0,
            marginBottom: 5,
            maxHeight: 130,
          }}
        >
          <Box component="p">{data.ans}</Box>
        </AppScrollbar>
        <Box mx={-2}>
          {data.tags.map((tag, index) => {
            return (
              <Chip
                label={tag}
                variant="outlined"
                sx={{
                  margin: 2,
                  fontWeight: Fonts.MEDIUM,
                }}
                key={index}
              />
            );
          })}
        </Box>
      </AppCard>
    </Grid>
  );
};

export default KbItem;
