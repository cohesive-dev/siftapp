import React from 'react';
import AppCard from '@sift/components/AppCard';
import AppList from '@sift/components/AppList';
import Box from '@mui/material/Box';
import { Fonts } from '@sift/constants/AppEnums';
//import {timeFromNow} from '@sift/utility/utils';
import { useIntl } from 'react-intl';
import { NotificationDataType } from '@sift/models/dashboards/Academy';

type NotificationItemProps= {
  notification: NotificationDataType;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        px: 5,
        py: 2,
      }}
      className="item-hover"
    >
      <Box
        sx={{
          mr: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          width: 50,
          textAlign: 'center',
          height: 50,
          backgroundColor: notification.bgcolor,
          color: notification.color,
          borderRadius: 1,
        }}
      >
        {notification.letter}
      </Box>
      <Box
        sx={{
          width: 'calc(100% - 66px)',
          overflow: 'hidden',
        }}
      >
        <Box
          component="h3"
          sx={{
            display: 'inline-block',
            fontWeight: Fonts.MEDIUM,
            mb: 0.5,
            fontSize: 14,
          }}
        >
          {notification.content}
        </Box>
        <Box
          component="p"
          sx={{
            fontSize: 14,
            color: 'text.secondary',
            mb: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {notification.date}
        </Box>
      </Box>
    </Box>
  );
};

type NotificationsProps ={
  notifications: NotificationDataType[];
}

const Notifications: React.FC<NotificationsProps> = ({ notifications }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages['academy.notifications'] as string}
      contentStyle={{ px: 0 }}
    >
      <AppList
        animation="transition.slideRightBigIn"
        data={notifications}
        renderRow={(data, index) => (
          <NotificationItem key={index} notification={data} />
        )}
      />
    </AppCard>
  );
};

export default Notifications;
