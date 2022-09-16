import React from 'react';
import { Grid } from '@mui/material';
import AppGridContainer from '@sift/components/AppGridContainer';
import AppAnimate from '@sift/components/AppAnimate';
import { useGetDataApi } from '@sift/hooks/APIHooks';
import {
  Deals,
  GoalProgress,
  MonthlyEarning,
  QuickStats,
  Reviews,
  SocialMediaAdvertise,
  Statistics,
  TicketSupport,
  TodayTasks,
  TotalRevenue,
  WebTraffic,
} from '@sift/modules/dashboards/CRM';
import AppLoader from '@sift/components/AppLoader';
import type { CRMType } from '@sift/models/dashboards/CRM';

const CRM = () => {
  const [{ apiData: crmData, loading }] =
    useGetDataApi<CRMType>('/dashboard/crm');

  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppAnimate animation="transition.slideUpIn" delay={200}>
          <AppGridContainer>
            <Grid item xs={12} md={5}>
              <TotalRevenue revenueData={crmData.revenueData} />
            </Grid>
            <Grid item xs={12} md={7}>
              <QuickStats quickStatsData={crmData.quickStatsData} />
            </Grid>
          </AppGridContainer>
        </AppAnimate>
      )}
    </>
  );
};

export default CRM;
