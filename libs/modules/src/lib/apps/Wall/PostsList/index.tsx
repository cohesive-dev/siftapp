import React from 'react';
import AppList from '@sift/components/AppList';
import PostItem from './PostItem';
import { PostObjType, WallDataType } from '@sift/models/apps/Wall';

type Props = {
  wallData: WallDataType;
  postList: PostObjType[];
  setPostList: (data: PostObjType[]) => void;
};

const PostsList = ({ wallData, postList, setPostList }: Props) => {
  return (
    <AppList
      data={postList}
      renderRow={(post, index) => (
        <PostItem
          key={index}
          post={post}
          wallData={wallData}
          setPostList={setPostList}
        />
      )}
    />
  );
};

export default PostsList;
