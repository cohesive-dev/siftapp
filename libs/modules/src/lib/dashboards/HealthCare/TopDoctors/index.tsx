import React from 'react';
import { useIntl } from 'react-intl';
import AppCard from '@sift/components/AppCard';
import AppMenu from '@sift/components/AppMenu';
import AppList from '@sift/components/AppList';
import DoctorCell from './DoctorCell';
import AppScrollbar from '@sift/components/AppScrollbar';
import { TopDoctorType } from '@sift/models/dashboards/HealthCare';

type TopDoctorsProps = {
  data: TopDoctorType[];
};

const TopDoctors: React.FC<TopDoctorsProps> = ({ data }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['healthCare.topDoctors'] as string}
      contentStyle={{ px: 0 }}
      action={<AppMenu />}
    >
      <AppScrollbar sx={{ maxHeight: 280 }}>
        <AppList
          data={data}
          renderRow={(doctor) => <DoctorCell key={doctor.id} doctor={doctor} />}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default TopDoctors;
