import React from 'react';
import TaskList from './TaskList';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import DateSelector from './DateSelector';
import IntlMessages from '@sift/helpers/IntlMessages';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import AppCard from '@sift/components/AppCard';
import { useIntl } from 'react-intl';
import { TodayTaskType } from '@sift/models/dashboards/CRM';

type TodayTasksProps= {
  todayTaskData: TodayTaskType[];
}

const TodayTasks: React.FC<TodayTasksProps> = ({ todayTaskData }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['dashboard.todayTasks'] as string}
      sxStyle={{ height: 1 }}
      action={
        <Box>
          <Hidden xsDown>
            <Link
              sx={{
                fontSize: 14,
                px: { xs: 2, sm: 5 },
                color: grey[500],
              }}
              component="button"
              underline="none"
            >
              <IntlMessages id="common.createTask" />
            </Link>
          </Hidden>
          <Link
            sx={{
              fontSize: 14,
              px: { xs: 2, sm: 5 },
            }}
            color="secondary"
            component="button"
            underline="none"
          >
            <IntlMessages id="common.viewAll" />
          </Link>
        </Box>
      }
    >
      <Grid container spacing={5}>
        <Grid item xs={12} md={6} xl={7}>
          <TaskList todayTaskData={todayTaskData} />
        </Grid>

        <Grid item xs={12} md={6} xl={5}>
          <DateSelector />
        </Grid>
      </Grid>
    </AppCard>
  );
};

export default TodayTasks;
