import React from 'react';
import AppCard from '@sift/components/AppCard';
import { useIntl } from 'react-intl';
import PatientGraph from './PatientGraph';
import { Box } from '@mui/material';
import AppMenu from '@sift/components/AppMenu';
import { Fonts } from '@sift/constants/AppEnums';
import { NewpatientsType } from '@sift/models/dashboards/HealthCare';

type NewPatientsProps = {
  data: NewpatientsType[];
};

const Newpatients: React.FC<NewPatientsProps> = ({ data }) => {
  const { messages } = useIntl();

  return (
    <AppCard
      title={messages['healthCare.newPatient'] as string}
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
            214
          </Box>
          <Box
            sx={{
              '& img': {
                height: 12,
              },
            }}
          >
            <img
              src={'/assets/images/dashboard/metrics_icon_active.png'}
              alt="down"
            />
          </Box>
        </Box>
        <Box
          sx={{
            mx: -6,
            mb: -6,
          }}
        >
          <PatientGraph data={data} />
        </Box>
      </Box>
    </AppCard>
  );
};

export default Newpatients;
