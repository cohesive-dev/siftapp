import React from 'react';
import ChatViewContainer from './ChatViewContainer';
import { NoUserScreen } from '@sift/modules/apps/Chat';

import { styled } from '@mui/material/styles';
import { Fonts } from '@sift/constants/AppEnums';
import { ConnectionType } from '@sift/models/apps/Chat';

const MessagesScreen = styled('div')(() => {
  return {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };
});
const ScrollChatNoUser = styled('div')(({ theme }) => {
  return {
    fontSize: 18,
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    height: 'calc(100vh - 169px) !important',
    fontWeight: Fonts.MEDIUM,
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
    },
    '& .MuiSvgIcon-root': {
      fontSize: '3rem',
      color: '#BDBDBD',
      [theme.breakpoints.up('lg')]: {
        fontSize: '5rem',
      },
    },
  };
});
type ChatContentProps = {
  selectedUser: ConnectionType;
  setSelectedUser: (member: ConnectionType) => void;
  [x: string]: any;
};
const ChatContent = ({ selectedUser, setSelectedUser }: ChatContentProps) => {
  return (
    <>
      {selectedUser ? (
        <MessagesScreen>
          <ChatViewContainer
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        </MessagesScreen>
      ) : (
        <ScrollChatNoUser>
          <NoUserScreen />
        </ScrollChatNoUser>
      )}
    </>
  );
};

export default ChatContent;
