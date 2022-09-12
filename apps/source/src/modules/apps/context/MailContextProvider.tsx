import React, {createContext, ReactNode, useContext, useEffect, useState,} from 'react';
import {useGetDataApi} from '@sift/hooks/APIHooks';
import type {ConnectionType, FolderType, LabelType, MailType,} from '@sift/models/apps/Mail';
import {APIDataProps} from '@sift/models/APIDataProps';
import {useRouter} from "next/router";

export type MailContextType = {
  labelList: LabelType[];
  connectionList: ConnectionType[];
  folderList: FolderType[];
  mailList: APIDataProps<MailType[]>;
  loading: boolean;
  page: number;
  all?: string | string[];
  folder?:string,
  label?:string,
};

export type MailActionContextType = {
  setMailData: (data: APIDataProps<MailType[]>) => void;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    data: number
  ) => void;
};

const ContextState: MailContextType = {
  labelList: [],
  folderList: [],
  connectionList: [],
  mailList: {} as APIDataProps<MailType[]>,
  loading: false,
  page: 0,
  all: undefined,
  folder:undefined,
  label:undefined,
};

const MailContext = createContext<MailContextType>(ContextState);
const MailActionsContext = createContext<MailActionContextType>({
  setMailData: (data: APIDataProps<MailType[]>) => {},
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    data: number
  ) => {},
});

export const useMailContext = () => useContext(MailContext);

export const useMailActionsContext = () => useContext(MailActionsContext);

type Props = {
  children: ReactNode;
};
export const MailContextProvider = ({ children }: Props) => {
  const router = useRouter();
  const { asPath } = router;
  const { all } = router.query;
  let folder;
  let label;
  if (all.length === 2 && !+all[1]) {
    label = all[1];
  } else if (all.length === 1) {
    folder = all[0];
  }
  const [{ apiData: labelList }] = useGetDataApi<LabelType[]>(
    '/api/mailApp/labels/list'
  );
  const [{ apiData: connectionList }] = useGetDataApi<ConnectionType[]>(
    '/api/mailApp/connection/list'
  );
  const [{ apiData: folderList }] = useGetDataApi<FolderType[]>(
    '/api/mailApp/folders/list'
  );
  const [page, setPage] = useState(0);

  const [
    { apiData: mailList, loading },
    { setQueryParams, setData: setMailData },
  ] = useGetDataApi<APIDataProps<MailType[]>>(
    '/api/mailApp/folder/mail/List',
    undefined,
    {
      type: folder ? 'folder' : 'label',
      name: folder || label,
      page: page,
    },
    false
  );
  console.log()

  useEffect(() => {
    setPage(0);
  }, [asPath]);

  useEffect(() => {
    setQueryParams({
      type: folder ? 'folder' : 'label',
      name: folder || label,
      page,
    });
  }, [page, asPath]);

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <MailContext.Provider
      value={{
        all,
        folder,
        label,
        labelList,
        connectionList,
        folderList,
        mailList,
        loading,
        page,
      }}
    >
      <MailActionsContext.Provider
        value={{
          setMailData,
          onPageChange,
        }}
      >
        {children}
      </MailActionsContext.Provider>
    </MailContext.Provider>
  );
};
export default MailContextProvider;
