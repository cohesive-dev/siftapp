import React from 'react';
import Box from '@mui/material/Box';
import { Fonts } from '@sift/constants/AppEnums';
import VisitorsGraph from './VisitorsGraph';
import { green, red } from '@mui/material/colors';
import Link from '@mui/material/Link';
import { useIntl } from 'react-intl';
import AppCard from '@sift/components/AppCard';
import { ActiveVisitorsType } from '@sift/models/dashboards/Analytics';

type Props = {
  data: ActiveVisitorsType;
};

const ActiveVisitors = ({ data }: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard contentStyle={{ padding: 0 }}>
      <Box
        sx={{
          pt: { xs: 5, sm: 5, xl: 5 },
          backgroundColor: '#49bd65',
        }}
      >
        <Box
          sx={{
            px: 6,
          }}
        >
          <Box
            sx={{
              color: '#FFFFFF',
              mb: 2,
              fontWeight: Fonts.BOLD,
              fontSize: 16,
            }}
            component="h3"
          >
            {messages['dashboard.analytics.activeVisitors'] as string}
          </Box>
          <Box
            sx={{
              color: '#FFF8',
            }}
          >
            {messages['dashboard.analytics.pageViewPerMinutes'] as string}
          </Box>
        </Box>
        <Box
          sx={{
            mt: 'auto',
          }}
        >
          <VisitorsGraph data={data.graphData} />
        </Box>
      </Box>
      <Box
        sx={{
          pt: 5,
          pb: 1,
          px: 6,
        }}
      >
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <Box
            sx={{
              mb: 0.5,
            }}
          >
            <Box
              sx={{
                display: 'inline-block',
                fontWeight: Fonts.MEDIUM,
                fontSize: 18,
              }}
              component="h3"
            >
              {data.value}
            </Box>
            <Box
              sx={{
                ml: 3,
                fontSize: 16,
                fontWeight: Fonts.MEDIUM,
                color: data.growth > 0.0 ? green[500] : red[500],
              }}
              component="span"
            >
              {data.growth}% Then yesterday
            </Box>
          </Box>
          <Box
            component="p"
            sx={{
              fontSize: 14,
              color: 'text.secondary',
              mb: 1,
            }}
          >
            {data.slug}
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: 'right',
          }}
        >
          <Link
            component="button"
            sx={{
              color: (theme) => theme.palette.secondary.main,
              fontSize: 16,
              marginTop: { xs: 1.5, xl: 4 },
              textDecoration: 'none',
            }}
          >
            View Report
          </Link>
        </Box>
      </Box>
    </AppCard>
  );
};

export default ActiveVisitors;
