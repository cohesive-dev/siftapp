import React from 'react';
import { useIntl } from 'react-intl';
import AppCard from '@sift/components/AppCard';
import AppMenu from '@sift/components/AppMenu';
import AppList from '@sift/components/AppList';
import AppointmentCell from './AppointmentCell';
import AppScrollbar from '@sift/components/AppScrollbar';
import { UpcomingAppointmentType } from '@sift/models/dashboards/HealthCare';

type UpcomingAppointmentsProps = {
  data: UpcomingAppointmentType[];
};

const UpcomingAppointments: React.FC<UpcomingAppointmentsProps> = ({
  data,
}) => {
  const { messages } = useIntl();
  return (
    <AppCard
      contentStyle={{ px: 0 }}
      title={messages['healthCare.upcomingAppointments'] as string}
      action={<AppMenu />}
    >
      <AppScrollbar sx={{ maxHeight: 280 }}>
        <AppList
          data={data}
          renderRow={(appointment) => (
            <AppointmentCell key={appointment.id} appointment={appointment} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default UpcomingAppointments;
