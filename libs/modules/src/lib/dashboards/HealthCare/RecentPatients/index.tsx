import React from 'react';
import AppCard from '@sift/components/AppCard';
import { useIntl } from 'react-intl';
import AppSelect from '@sift/components/AppSelect';
import PatientsTable from './PatientsTable';
import { RecentPatientType } from '@sift/models/dashboards/HealthCare';

type RecentPatientsProps = {
  recentPatients: RecentPatientType[];
};

const RecentPatients: React.FC<RecentPatientsProps> = ({ recentPatients }) => {
  const { messages } = useIntl();
  const handleSelectionType = (data: unknown) => {
    console.log('data: ', data);
  };
  return (
    <AppCard
      contentStyle={{ px: 0 }}
      title={messages['healthCare.recentPatient'] as string}
      action={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }
    >
      <PatientsTable recentPatients={recentPatients} />
    </AppCard>
  );
};

export default RecentPatients;
