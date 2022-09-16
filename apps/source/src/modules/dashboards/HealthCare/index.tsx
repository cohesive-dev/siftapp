import React from 'react';
import { Grid } from '@mui/material';
import AppGridContainer from '@sift/components/AppGridContainer';
import AppAnimate from '@sift/components/AppAnimate';
import { useGetDataApi } from '@sift/hooks/APIHooks';
import {
  AppointmentCard,
  CancelVisits,
  DrCard,
  HealthStatics,
  HeartRate,
  HospitalActivity,
  HospitalStatics,
  InfoWidget,
  NewPatients,
  Notifications,
  ProfileCard,
  RecentPatients,
  TopDoctors,
  UpcomingAppointments,
  YourActivity,
} from '@sift/modules/dashboards/HealthCare';
import AppLoader from '@sift/components/AppLoader';
import type { HealthCareType } from '@sift/models/dashboards/HealthCare';

const HealthCarePage = () => {
  const [{ apiData: healthCare, loading }] = useGetDataApi<HealthCareType>(
    '/dashboard/health_care'
  );

  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppAnimate animation="transition.slideUpIn" delay={200}>
          <AppGridContainer>
            {healthCare.drState.map((data, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <DrCard data={data} />
              </Grid>
            ))}

            <Grid item xs={12} sm={12} md={6}>
              <HospitalActivity data={healthCare.hospitalActivity} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProfileCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppGridContainer>
                {healthCare.appointmentCards.map((data, index) => (
                  <Grid item xs={12} key={index}>
                    <AppointmentCard data={data} />
                  </Grid>
                ))}
              </AppGridContainer>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <HeartRate data={healthCare.heartCard} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <YourActivity data={healthCare.yourActivity} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <HeartRate data={healthCare.temperatureCard} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppGridContainer>
                {healthCare.doses.map((data, index) => (
                  <Grid item xs={12} key={index}>
                    <HospitalStatics data={data} />
                  </Grid>
                ))}
              </AppGridContainer>
            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
              <TopDoctors data={healthCare.topDoctors} />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <UpcomingAppointments data={healthCare.upcomingAppointment} />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Notifications data={healthCare.notifications} />
            </Grid>
            <Grid item xs={12} md={6}>
              <HealthStatics data={healthCare.heathStatics} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <NewPatients data={healthCare.newPatients} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <CancelVisits data={healthCare.cancelVisits} />
            </Grid>

            {healthCare.hospitalStatics.map((data, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <HospitalStatics data={data} />
              </Grid>
            ))}
            <Grid item xs={12} sm={12} md={8}>
              <RecentPatients recentPatients={healthCare.recentPatients} />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <AppGridContainer>
                {healthCare.bloodCard.map((data, index) => (
                  <Grid item xs={12} sm={6} key={'grid-' + index}>
                    <InfoWidget data={data} />
                  </Grid>
                ))}
              </AppGridContainer>
            </Grid>
          </AppGridContainer>
        </AppAnimate>
      )}
    </>
  );
};

export default HealthCarePage;
