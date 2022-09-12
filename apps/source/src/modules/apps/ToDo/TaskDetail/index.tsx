import React, { useEffect } from 'react';
import TaskDetailHeader from './TaskDetailHeader';
import TaskDetailBody from './TaskDetailBody';
import { useRouter } from 'next/router';
import AppsHeader from '@sift/components/AppsHeader';
import AppsContent from '@sift/components/AppsContent';
import { MailDetailSkeleton } from '@sift/components/MailDetailSkeleton';
import { useGetDataApi } from '@sift/hooks/APIHooks';
import { TodoType } from '@sift/models/apps/Todo';

const TaskDetail = () => {
  const { query } = useRouter();
  const [{ apiData: selectedTask }, { setQueryParams, setData }] =
    useGetDataApi<TodoType>('/api/todoApp/task/', undefined,
      { id: query.all[query.all.length - 1] }, false);

  useEffect(() => {
    setQueryParams({ id: query.all[query.all.length - 1] });
  }, [query.all]);

  const onUpdateSelectedTask = (data: TodoType) => {
    setData(data);
  };

  if (!selectedTask?.id) {
    return <MailDetailSkeleton />;
  }
  return (
    <>
      <AppsHeader>
        <TaskDetailHeader
          selectedTask={selectedTask}
          onUpdateSelectedTask={onUpdateSelectedTask}
        />
      </AppsHeader>
      <AppsContent isDetailView>
        <TaskDetailBody
          selectedTask={selectedTask}
          onUpdateSelectedTask={onUpdateSelectedTask}
        />
      </AppsContent>
    </>
  );
};

export default TaskDetail;
