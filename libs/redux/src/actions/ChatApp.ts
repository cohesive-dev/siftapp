import { Dispatch } from 'redux';
import { AppActions } from '@sift/actions';
import { fetchError, fetchStart, fetchSuccess } from './Common';
import {
  ADD_NEW_MESSAGE,
  DELETE_MESSAGE,
  DELETE_USER_MESSAGES,
  EDIT_MESSAGE,
  GET_CONNECTIONS_LIST,
  GET_USER_MESSAGES,
  SELECT_USER,
} from '@sift/actions/Chat.actions';
import { ConnectionType, MessageDataType } from '@sift/models/apps/Chat';
import jwtAxios from '@sift/services/auth/JWT';
import { appIntl } from '@sift/helpers';

export const getConnectionList = () => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .get('/api/chatApp/connections')
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_CONNECTIONS_LIST, payload: data.data });
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const getConnectionMessages = (id: number) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .get('/api/chatApp/connection/messages', {
        params: {
          id,
        },
      })
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_USER_MESSAGES, payload: data.data });
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onSendMessage = (channelId: number, message: MessageDataType) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>, getState: any) => {
    jwtAxios
      .post('/api/chatApp/message', { channelId, message })
      .then((data: any) => {
        console.log('data', data.data);
        if (data.status === 200) {
          dispatch(fetchSuccess());
          if (
            data.data.userMessages &&
            data.data.userMessages.messageData.length === 1 &&
            getState().chatApp.userMessages &&
            getState().chatApp.userMessages.messageData
          ) {
            console.log(
              'getState().chatApp.userMessages.messageData',
              getState().chatApp.userMessages.messageData
            );
            dispatch({
              type: ADD_NEW_MESSAGE,
              payload: {
                data: data.data /*{
                  ...data.data,
                  userMessages: {
                    ...data.userMessages,
                    messageData: getState().chatApp.userMessages.messageData.concat(
                      data.data.userMessages.messageData,
                    ),
                  },
                }*/,
              },
            });
            console.log(getState().chatApp.userMessages);
          } else {
            dispatch({
              type: ADD_NEW_MESSAGE,
              payload: { data: data.data },
            });
          }
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onEditMessage = (channelId: number, message: MessageDataType) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    jwtAxios
      .put('/api/chatApp/message', { channelId, message })
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({
            type: EDIT_MESSAGE,
            payload: { data: data.data },
          });
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onDeleteMessage = (channelId: number, messageId: number) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    jwtAxios
      .post('/api/chatApp/delete/message', { channelId, messageId })
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: DELETE_MESSAGE, payload: data.data });
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onDeleteConversation = (channelId: number) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .post('/api/chatApp/delete/user/messages', { channelId })
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: DELETE_USER_MESSAGES, payload: data.data });
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onSelectUser = (user: ConnectionType) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch({ type: SELECT_USER, payload: user });
  };
};
