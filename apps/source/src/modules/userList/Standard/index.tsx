import React from 'react';
import AppList from '@sift/components/AppList';
import { ListItem } from '@sift/modules/userList/Standard';
import AppLoader from '@sift/components/AppLoader';
import { useGetDataApi } from '@sift/hooks/APIHooks';
import { UserListProps } from '@sift/models/Apps';

const Standard = () => {
  const [{ apiData: usersList, loading }] =
    useGetDataApi<UserListProps[]>('/api/user/list');
  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppList
          data={usersList}
          renderRow={(user) => {
            return <ListItem user={user} key={user.id} />;
          }}
        />
      )}
    </>
  );
};

export default Standard;
