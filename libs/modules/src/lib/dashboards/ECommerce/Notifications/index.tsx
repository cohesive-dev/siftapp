import React from 'react';
import AppCard from '@sift/components/AppCard';
import { useIntl } from 'react-intl';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppScrollbar from '@sift/components/AppScrollbar';
import NotificationCell from './NotificationCell';
import AppList from '@sift/components/AppList';
import { NotificationsType } from '@sift/models/dashboards/Ecommerce';

type NotificationsProps = {
  notifications: NotificationsType[];
};

const Notifications: React.FC<NotificationsProps> = ({ notifications }) => {
  const { messages } = useIntl();

  return (
    <AppCard
      contentStyle={{ px: 0 }}
      title={messages['eCommerce.notifications'] as string}
      action={
        <IconButton
          sx={{
            height: 30,
            width: 30,
          }}
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          // onClick={null}
        >
          <MoreVertIcon />
        </IconButton>
      }
    >
      <AppScrollbar
        sx={{
          maxHeight: 386,
        }}
      >
        <AppList
          data={notifications}
          renderRow={(item) => <NotificationCell key={item.id} item={item} />}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Notifications;
