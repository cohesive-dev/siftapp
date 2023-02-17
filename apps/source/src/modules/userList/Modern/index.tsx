import React from 'react';
import AppList from '@sift/components/AppList';

import AppLoader from '@sift/components/AppLoader';
import { useGetDataApi } from '@sift/hooks/APIHooks';
import { ListItem } from '@sift/modules/userList/Modern';
import { UserListProps } from '@sift/models/Apps';

const Modern = () => {
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

export default Modern;
