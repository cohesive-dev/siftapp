import React from 'react';
import { Grid } from '@mui/material';
import AppGridContainer from '@sift/components/AppGridContainer';
import AppAnimate from '@sift/components/AppAnimate';
import { useGetDataApi } from '@sift/hooks/APIHooks';
import {
  ActiveVisitors,
  EarningByCountry,
  InfoWidget,
  OrderNTransaction,
  PageVisits,
  SalesState,
  StateCard,
  TicketsSupport,
  TopSelling,
  TrafficSource,
  VisitorPageView,
  WelcomeCard,
} from '@sift/modules/dashboards/Analytics';
import AppLoader from '@sift/components/AppLoader';
import type { AnalyticsType } from '@sift/models/dashboards/Analytics';
import { MonthlyEarning } from '@sift/modules/dashboards/CRM';

interface AnalyticsProps {
  fundName: string;
  fundStartDate: number;
}

const Analytics = ({
  fundName,
  fundStartDate
}) => {
  const [{ apiData: analyticsData, loading }] = useGetDataApi<AnalyticsType>(
    '/dashboard/analytics'
  );

  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppAnimate animation="transition.slideUpIn" delay={200}>
          <AppGridContainer>
            <Grid item xs={12} lg={6}>
              <WelcomeCard fundName={fundName} fundStartDate={fundStartDate} data={analyticsData.welcomeCard} />

              <AppGridContainer>
                <Grid item xs={12} sm={6}>
                  <StateCard data={analyticsData.revenueCards[0]} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <StateCard data={analyticsData.revenueCards[1]} />
                </Grid>
              </AppGridContainer>
            </Grid>
            <Grid item xs={12} lg={6}>
              <SalesState
                salesState={analyticsData.salesState}
                chartData={analyticsData.salesChartData}
              />
            </Grid>
            <Grid item xs={12} md={8} xl={9}>
              <VisitorPageView data={analyticsData.visitorsPageView} />
            </Grid>
            <Grid item xs={12} md={4} xl={3}>
              <MonthlyEarning earningGraphData={analyticsData.earningGraphData} />
            </Grid>
          </AppGridContainer>
        </AppAnimate>
      )}
    </>
  );
};

export default Analytics;
