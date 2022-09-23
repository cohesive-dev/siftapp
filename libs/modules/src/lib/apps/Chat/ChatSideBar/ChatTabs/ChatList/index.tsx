import React from 'react';
import ChatItem from './ChatItem';
import AppList from '@sift/components/AppList';
import ListEmptyResult from '@sift/components/AppList/ListEmptyResult';
import { useIntl } from 'react-intl';
import ChatListSkeleton from '@sift/components/ChatListSkeleton';
import { ConnectionType } from '@sift/models/apps/Chat';

type ChatListProps = {
  chatListData: ConnectionType[];
  loading: boolean;
  selectedUser: ConnectionType;
  setSelectedUser: (user: ConnectionType) => void;
};

const ChatList: React.FC<ChatListProps> = ({
  chatListData,
  loading,
  setSelectedUser,
  selectedUser,
}) => {
  const { messages } = useIntl();
  return (
    <AppList
      containerStyle={{
        display: 'flex',
        flexDirection: 'column',
      }}
      data={chatListData}
      ListEmptyComponent={
        <ListEmptyResult
          content={messages['chatApp.noUserFound'] as string}
          loading={loading}
          placeholder={<ChatListSkeleton />}
        />
      }
      renderRow={(item) => (
        <ChatItem
          key={'chat-item-' + item.id}
          item={item}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    />
  );
};

export default ChatList;
