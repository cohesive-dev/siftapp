import React from 'react';
import ProfileViewsGraph from './ProfileViewsGraph';
import IntlMessages from '@sift/helpers/IntlMessages';
import Box from '@mui/material/Box';
import { Fonts } from '@sift/constants/AppEnums';
import AppCard from '@sift/components/AppCard';
import { ProfileViewsType } from '@sift/models/dashboards/Metrics';

type ProfileViewsProps = {
  data: ProfileViewsType;
};

const ProfileViews: React.FC<ProfileViewsProps> = ({ data }) => {
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      contentStyle={{ display: 'flex', flexDirection: 'column' }}
    >
      <Box
        component="h3"
        sx={{
          mb: 1,
          color: 'text.primary',
          fontSize: 20,
          fontWeight: Fonts.MEDIUM,
        }}
      >
        {data.views}
      </Box>
      <Box
        component="p"
        sx={{
          color: 'text.secondary',
          fontSize: 14,
          fontWeight: Fonts.REGULAR,
        }}
      >
        <IntlMessages id="dashboard.profileViews" />
      </Box>
      <Box
        sx={{
          mt: 'auto',
        }}
      >
        <ProfileViewsGraph data={data.graphData} />
      </Box>
    </AppCard>
  );
};

export default ProfileViews;
