import React from 'react';
import ContactItem from './ContactItem';
import AppList from '@sift/components/AppList';
import ListEmptyResult from '@sift/components/AppList/ListEmptyResult';
import ChatListSkeleton from '@sift/components/ChatListSkeleton';
import {useIntl} from 'react-intl';
import {ConnectionType} from "@sift/models/apps/Chat";

type ConnectionListProps ={
  connectionListData: ConnectionType[];
  loading: boolean;
  selectedUser: ConnectionType;
  setSelectedUser: (user:ConnectionType)=>void;
}

const ContactList = ({
  connectionListData,
  loading,
  setSelectedUser,
  selectedUser,
}:ConnectionListProps) => {
  const { messages } = useIntl();
  return (
    <AppList
      containerStyle={{
        display: 'flex',
        flexDirection: 'column',
      }}
      data={connectionListData}
      ListEmptyComponent={
        <ListEmptyResult
          content={messages['chatApp.noUserFound'] as string}
          loading={loading}
          placeholder={<ChatListSkeleton />}
        />
      }
      renderRow={(item) => (
        <ContactItem
          key={'connection-item-' + item.id}
          item={item}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      )}
    />
  );
};

export default ContactList;
