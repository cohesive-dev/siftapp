import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import TaskItem from './TaskItem';
import AppList from '@sift/components/AppList';
import AppCard from '@sift/components/AppCard';
import { useIntl } from 'react-intl';
import AppScrollbar from '@sift/components/AppScrollbar';
import { TaskListType } from '@sift/models/dashboards/Widgets';

type TaskListProps = {
  data: TaskListType[];
};

const TaskList: React.FC<TaskListProps> = ({ data }) => {
  const taskData = data;

  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['dashboard.taskList'] as string}
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
          data={taskData}
          renderRow={(item) => {
            return <TaskItem key={item.id} item={item} />;
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default TaskList;
