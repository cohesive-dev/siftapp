import React from 'react';
import TaskSideBar from './TaskSideBar/index';
import TasksList from './TasksList';
import TaskDetail from './TaskDetail';
import { useIntl } from 'react-intl';
import AppsContainer from '@sift/components/AppsContainer';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import TodoContextProvider from '../context/TodoContextProvider';

const ToDo = () => {
  const { query } = useRouter();
  console.log(query.all[query.all.length - 1])
  const { messages } = useIntl();
  const id = parseInt(query.all[query.all.length - 1]) || 0;
  return (
    <TodoContextProvider>
      <AppsContainer
        title={messages['todo.todoApp'] as string}
        sidebarContent={<TaskSideBar />}
      >
        {id>0 ? (
          <Box
            sx={{
              transition: 'all 0.5s ease',
              transform: 'translateX(100%)',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              opacity: 0,
              visibility: 'hidden',
              backgroundColor: 'background.paper',
              '&.show': {
                transform: 'translateX(0)',
                opacity: 1,
                visibility: 'visible',
              },
            }}
            className={clsx({
              show: id>0,
            })}
          >
            <TaskDetail />
          </Box>
        ) : (
          <TasksList />
        )}
      </AppsContainer>
    </TodoContextProvider>
  );
};

export default ToDo;
