import React, { useState } from 'react';
import Box from '@mui/material/Box';
import moment from 'moment';
import { Zoom } from '@mui/material';
import { useIntl } from 'react-intl';
import AppSearchBar from '@sift/components/AppSearchBar';
import { useAuthUser } from '@sift/hooks/AuthHooks';
import { useChatContext } from '../../context/ChatContextProvider';
import { ChatTabs, ChatUserInfo } from '@sift/modules/apps/Chat';
import { ConnectionType } from '@sift/models/apps/Chat';

type ChatSideBarProps = {
  selectedUser: ConnectionType;
  setSelectedUser: (member: ConnectionType) => void;
};

const ChatSideBar = ({ selectedUser, setSelectedUser }: ChatSideBarProps) => {
  const { connectionList, loading } = useChatContext();
  const [keywords, setKeywords] = useState('');
  const { user } = useAuthUser();

  const getConnectionList = () => {
    if (keywords !== '') {
      return connectionList.filter((item) =>
        item.name.toUpperCase().includes(keywords.toUpperCase())
      );
    }
    return connectionList;
  };

  const getChatList = () => {
    let chatsList = connectionList?.filter((item) => item.lastMessage);
    if (keywords !== '') {
      chatsList = chatsList.filter((item) =>
        item.name.toUpperCase().includes(keywords.toUpperCase())
      );
    }
    chatsList?.sort((a: ConnectionType, b: ConnectionType) => {
      const momentA: any = moment(a.lastMessage!.time).format('X');
      const momentB: any = moment(b.lastMessage!.time).format('X');
      return momentB - momentA;
    });
    return chatsList;
  };

  const connectionListData = getConnectionList();

  const chatListData = getChatList();

  const { messages } = useIntl();

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
      }}
    >
      <Zoom in style={{ transitionDelay: '300ms' }}>
        <Box
          sx={{
            px: 5,
            pt: 4,
            pb: 2,
          }}
        >
          <ChatUserInfo user={user} />
        </Box>
      </Zoom>
      <Box
        sx={{
          px: 5,
          pt: 2,
          width: 1,
        }}
      >
        <AppSearchBar
          sx={{
            marginRight: 0,
            width: '100%',
            '& .searchRoot': {
              width: '100%',
            },
            '& .MuiInputBase-input': {
              width: '100%',
              '&:focus': {
                width: '100%',
              },
            },
          }}
          iconPosition="right"
          overlap={false}
          value={keywords}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setKeywords(e.target.value)}
          placeholder={messages['common.searchHere'] as string}
        />
      </Box>

      <ChatTabs
        connectionListData={connectionListData}
        chatListData={chatListData}
        loading={loading}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
    </Box>
  );
};

export default ChatSideBar;
