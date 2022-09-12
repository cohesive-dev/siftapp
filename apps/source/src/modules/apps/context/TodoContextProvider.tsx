import React, {createContext, ReactNode, useContext, useEffect, useState,} from 'react';
import {useGetDataApi} from '@sift/hooks/APIHooks';
import {FolderType, LabelType, PriorityType, StaffType, StatusType, TodoType,} from '@sift/models/apps/Todo';
import {APIDataProps} from '@sift/models/APIDataProps';
import {useRouter} from "next/router";

export const ViewMode = {
  List: 'list',
  Calendar: 'calendar',
};

export type TodoContextType = {
  labelList: LabelType[];
  folderList: FolderType[];
  priorityList: PriorityType[];
  staffList: StaffType[];
  statusList: StatusType[];
  taskLists: APIDataProps<TodoType[]>;
  loading: boolean;
  page: number;
  viewMode: string;
  all?: string | string[];
  folder?:string,
  label?:string,
};

export type TodoActionContextType = {
  setTodoData: (data: APIDataProps<TodoType[]>) => void;
  setQueryParams: (data: object) => void;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    data: number
  ) => void;
  reCallAPI: () => void;
  setPage: (data: number) => void;
  setViewMode: (data: string) => void;
};

const ContextState: TodoContextType = {
  labelList: [],
  folderList: [],
  priorityList: [],
  staffList: [],
  statusList: [],
  taskLists: {} as APIDataProps<TodoType[]>,

  loading: false,
  page: 0,
  viewMode: 'list',
  all: undefined,
  folder:undefined,
  label:undefined,
};

const TodoContext = createContext<TodoContextType>(ContextState);
const TodoActionsContext = createContext<TodoActionContextType>({
  setTodoData: (data: APIDataProps<TodoType[]>) => {},
  setQueryParams: (data: object) => {},
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    data: number
  ) => {},
  reCallAPI: () => {},
  setPage: (data: number) => {},
  setViewMode: (data: string) => {},
});

export const useTodoContext = () => useContext(TodoContext);

export const useTodoActionsContext = () => useContext(TodoActionsContext);

type Props = {
  children: ReactNode;
};
export const TodoContextProvider = ({ children }: Props) => {
  const router = useRouter();
  const { all, asPath } = router.query;
  let folder;
  let label;
  if (all.length === 2 && !+all[1]) {
    label = all[1];
  } else if (all.length === 1) {
    folder = all[0];
  }
  const [viewMode, setViewMode] = useState(ViewMode.List);
  const [{ apiData: labelList }] = useGetDataApi<LabelType[]>(
    '/api/todo/labels/list'
  );
  const [{ apiData: priorityList }] = useGetDataApi<PriorityType[]>(
    '/api/todo/priority/list'
  );
  const [{ apiData: staffList }] = useGetDataApi<StaffType[]>(
    '/api/todo/staff/list'
  );
  const [{ apiData: folderList }] = useGetDataApi<FolderType[]>(
    '/api/todo/folders/list',
    []
  );
  const [{ apiData: statusList }] = useGetDataApi<StatusType[]>(
    '/api/todo/status/list',
    []
  );
  const [page, setPage] = useState(0);

  const [
    { apiData: taskLists, loading },
    { setQueryParams, setData: setTodoData, reCallAPI },
  ] = useGetDataApi<APIDataProps<TodoType[]>>(
    '/api/todo/task/list',
    undefined,
    {},
    false
  );

  useEffect(() => {
    setPage(0);
  }, [asPath]);

  useEffect(() => {
    if (folder || label)
      setQueryParams({
        type: folder ? 'folder' : 'label',
        name: folder || label,
        page: page,
      });
  }, [page, folder, label]);

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <TodoContext.Provider
      value={{
        labelList,
        priorityList,
        staffList,
        statusList,
        folderList,
        taskLists,
        loading,
        page,
        viewMode,
      }}
    >
      <TodoActionsContext.Provider
        value={{
          setTodoData,
          onPageChange,
          setQueryParams,
          reCallAPI,
          setPage,
          setViewMode,
        }}
      >
        {children}
      </TodoActionsContext.Provider>
    </TodoContext.Provider>
  );
};
export default TodoContextProvider;
