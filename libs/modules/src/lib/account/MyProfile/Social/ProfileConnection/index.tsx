import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Fonts } from '@sift/constants/AppEnums';
import IntlMessages from '@sift/helpers/IntlMessages';
import AppGridContainer from '@sift/components/AppGridContainer';
import Member from './Member';
import { MemberDataType } from '@sift/models/account';

type ProfileConnectionProps = {
  profileConnection: MemberDataType[];
};

const ProfileConnection: React.FC<ProfileConnectionProps> = ({
  profileConnection,
}) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Typography
        component="h3"
        sx={{
          fontSize: 16,
          fontWeight: Fonts.BOLD,
          mb: { xs: 3, lg: 5 },
        }}
      >
        <IntlMessages id="common.profileConnections" />
      </Typography>
      <AppGridContainer spacing={4}>
        {profileConnection.map((member, index) => (
          <Grid item xs={12} sm={12} md={4} lg={6} xl={3} key={index}>
            <Member member={member} />
          </Grid>
        ))}
      </AppGridContainer>
    </Box>
  );
};

export default ProfileConnection;
