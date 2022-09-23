import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AppList from '@sift/components/AppList';
import AppCard from '@sift/components/AppCard';
import { useIntl } from 'react-intl';
import AppScrollbar from '@sift/components/AppScrollbar';
import MessageItem from '@sift/components/AppMessages/MessageItem';
import { MessagesType } from '@sift/models/dashboards/Widgets';

type MessagesProps = {
  data: MessagesType[];
};

const Messages: React.FC<MessagesProps> = ({ data }) => {
  const messageData = data;

  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages['dashboard.messages'] as string}
      contentStyle={{ px: 0 }}
      action={
        <CloseIcon
          sx={{
            cursor: 'pointer',
          }}
        />
      }
    >
      <AppScrollbar
        sx={{
          height: 263,
        }}
      >
        <AppList
          data={messageData}
          renderRow={(item) => {
            return <MessageItem key={item.id} item={item} />;
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Messages;
