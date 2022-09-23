import { PostObjType, WallDataType } from '../models/apps/Wall';

export const CREATE_NEW_POST = 'CREATE_NEW_POST';
export const GET_FEED_POSTS = 'GET_FEED_POSTS';
export const GET_WALL_DATA = 'GET_WALL_DATA';
export const UPDATE_POST = 'UPDATE_POST';

export type CreateNewPostActions = {
  type: typeof CREATE_NEW_POST;
  payload: PostObjType;
};

export type GetFeedPostActions = {
  type: typeof GET_FEED_POSTS;
  payload: PostObjType[];
};

export type GetWallDataActions = {
  type: typeof GET_WALL_DATA;
  payload: WallDataType;
};

export type UpdatePostActions = {
  type: typeof UPDATE_POST;
  payload: PostObjType;
};

export type WallActions =
  | CreateNewPostActions
  | GetFeedPostActions
  | GetWallDataActions
  | UpdatePostActions;
