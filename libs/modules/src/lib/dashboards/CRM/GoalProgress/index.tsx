import React from 'react';
import GoalProgressGraph from './GoalProgressGraph';
import IntlMessages from '@sift/helpers/IntlMessages';
import Box from '@mui/material/Box';
import AppCard from '@sift/components/AppCard';
import { useIntl } from 'react-intl';
import { ProgressGraphType } from '@sift/models/dashboards/CRM';

type GoalProgressProps= {
  progressGraphData: ProgressGraphType[];
}

const GoalProgress: React.FC<GoalProgressProps> = ({ progressGraphData }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages['dashboard.goalProgress'] as string}
    >
      <GoalProgressGraph progressGraphData={progressGraphData} />
      <Box
        sx={{
          mt: 5,
          px: 2,
          mb: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            component="span"
            sx={{
              height: { xs: 12, xl: 16 },
              width: { xs: 12, xl: 16 },
              mr: 2,
              borderRadius: '50%',
              backgroundColor: 'primary.main',
            }}
          />
          <Box
            component="span"
            sx={{
              fontSize: 14,
            }}
          >
            <IntlMessages id="dashboard.inProgress" />
          </Box>
        </Box>
        <Box
          sx={{
            ml: 'auto',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            component="span"
            sx={{
              height: { xs: 12, xl: 16 },
              width: { xs: 12, xl: 16 },
              mr: 2,
              borderRadius: '50%',
              backgroundColor: 'error.main',
            }}
          />
          <Box
            component="span"
            sx={{
              fontSize: 14,
            }}
          >
            <IntlMessages id="common.actual" />
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default GoalProgress;
