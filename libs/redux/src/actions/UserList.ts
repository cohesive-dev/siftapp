import { Dispatch } from 'redux';
import { AppActions } from '@sift/actions';
import { fetchError, fetchStart, fetchSuccess } from './Common';
import { GET_USER_LIST } from '@sift/actions/UserList.actions';
import jwtAxios from '@sift/services/auth/JWT';
import { appIntl } from '@sift/helpers';

export const onGetUserList = () => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .get('/api/user/list')
      .then((data: any) => {
        console.log('data:', data);
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_USER_LIST, payload: data.data });
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};
