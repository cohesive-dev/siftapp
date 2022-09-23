import React from 'react';
import TicketSupportTable from './TicketSupportTable';
import AppCard from '@sift/components/AppCard';
import { useIntl } from 'react-intl';
import { TicketSupportDataType } from '@sift/models/dashboards/CRM';

type TicketSupportProps= {
  ticketSupportData: TicketSupportDataType[];
}

const TicketSupport: React.FC<TicketSupportProps> = ({ ticketSupportData }) => {
  const { messages } = useIntl();

  return (
    <AppCard
      contentStyle={{ px: 0 }}
      title={messages['dashboard.latestTicketSupport'] as string}
      action={messages['common.viewAll'] as string}
    >
      <TicketSupportTable ticketSupportData={ticketSupportData} />
    </AppCard>
  );
};

export default TicketSupport;
