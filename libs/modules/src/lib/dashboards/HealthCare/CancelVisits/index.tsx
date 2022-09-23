import React from 'react';
import { useIntl } from 'react-intl';
import AppCard from '@sift/components/AppCard';
import { Box } from '@mui/material';
import VisitsGraph from './VisitsGraph';
import AppMenu from '@sift/components/AppMenu';
import { Fonts } from '@sift/constants/AppEnums';
import { CancelVisitType } from '@sift/models/dashboards/HealthCare';

type CancelVisitsProps = {
  data: CancelVisitType[];
};

const CancelVisits: React.FC<CancelVisitsProps> = ({ data }) => {
  const { messages } = useIntl();

  return (
    <AppCard
      title={messages['healthCare.cancelledVisits'] as string}
      action={<AppMenu />}
    >
      <Box>
        <Box
          sx={{
            mb: 6,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            component="span"
            sx={{
              mr: 2,
              fontSize: 20,
              fontWeight: Fonts.BOLD,
            }}
          >
            32
          </Box>
          <Box
            sx={{
              '& img': {
                height: 12,
              },
            }}
          >
            <img src={'/assets/images/dashboard/decries_icon.png'} alt="down" />
          </Box>
        </Box>
        <Box
          sx={{
            mx: -6,
            mb: -6,
          }}
        >
          <VisitsGraph data={data} />
        </Box>
      </Box>
    </AppCard>
  );
};

export default CancelVisits;
