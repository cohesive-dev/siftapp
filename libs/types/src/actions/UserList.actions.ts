import { UserListProps } from '../models/Apps';

export const GET_USER_LIST = 'GET_USER_LIST';

export type GetUserListActions = {
  type: typeof GET_USER_LIST;
  payload: UserListProps[];
};

export type UserListActions = GetUserListActions;
