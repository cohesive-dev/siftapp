import React from 'react';
import AppList from '@sift/components/AppList';
import { ListItem } from '@sift/modules/userList/Flat';
import AppLoader from '@sift/components/AppLoader';
import { useGetDataApi } from '@sift/hooks/APIHooks';

const Flat = () => {
  const [{ apiData: usersList, loading }] = useGetDataApi('/api/user/list', []);
  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppList
          onEndReached={() => console.log('onEndReached')}
          data={usersList}
          renderRow={(user) => {
            return <ListItem user={user} key={user.id} />;
          }}
        />
      )}
    </>
  );
};

export default Flat;
