import { Dispatch } from 'redux';
import { AppActions } from '@sift/actions';
import { fetchError, fetchStart, fetchSuccess, showMessage } from './Common';
import {
  ADD_BOARD_LIST,
  ADD_LIST_CARD,
  ADD_NEW_BOARD,
  DELETE_BOARD,
  DELETE_LIST,
  DELETE_LIST_CARD,
  EDIT_BOARD_DETAIL,
  EDIT_LIST_CARD,
  GET_BOARD_DETAIL,
  GET_BOARDS,
  GET_MEMBER_LIST,
  GET_SCRUM_LABEL_LIST,
} from '@sift/actions/Scrumboard.actions';
import { BoardType, CardListType, CardType } from '@sift/models/apps/ScrumbBoard';
import jwtAxios from '@sift/services/auth/JWT';
import { appIntl } from '@sift/helpers';

export const onGetBoardList = () => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .get('/api/scrumboard/board/list')
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_BOARDS, payload: data.data });
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onUpdateCardCategory = (
  cardId: any,
  sourceLaneId: any,
  categoryId: any,
  position: any,
  boardId: any
) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .put(`/api/cards/update/category`, {
        cardId,
        sourceLaneId,
        categoryId,
        position,
        boardId,
      })
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: EDIT_BOARD_DETAIL, payload: data.data });
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(String(messages['message.somethingWentWrong'])));
      });
  };
};

export const onGetScrumLabelList = () => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .get('/api/scrumboard/label/list')
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_SCRUM_LABEL_LIST, payload: data.data });
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onGetMemberList = () => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .get('/api/scrumboard/member/list')
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_MEMBER_LIST, payload: data.data });
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onEditBoardDetail = (board: BoardType) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .put('/api/scrumboard/edit/board', { board })
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: EDIT_BOARD_DETAIL, payload: data.data });
          dispatch(showMessage(String(messages['scrumBoard.boardEdited'])));
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onGetBoardDetail = (id: number | string) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .get('/api/scrumboard/board/', {
        params: {
          id: id,
        },
      })
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: GET_BOARD_DETAIL, payload: data.data });
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onAddNewBoard = (board: BoardType) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .post('/api/scrumboard/add/board', { board })
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: ADD_NEW_BOARD, payload: data.data });
          dispatch(showMessage(String(messages['scrumBoard.boardAdded'])));
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onAddNewList = (boardId: number, list: CardListType) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .post('/api/scrumboard/add/list', { boardId, list })
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: ADD_BOARD_LIST, payload: data.data });
          dispatch(showMessage(String(messages['scrumBoard.listAdded'])));
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onEditBoardList = (boardId: number, list: CardListType) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .put('/api/scrumboard/edit/list', { boardId, list })
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch(showMessage(String(messages['scrumBoard.listEdited'])));
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onAddNewCard = (
  board: BoardType,
  list: CardListType,
  card: CardType
) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .post('/api/scrumboard/add/card', { board, list, card })
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: ADD_LIST_CARD, payload: data.data });
          dispatch(showMessage(String(messages['scrumBoard.cardAdded'])));
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onEditCardDetails = (
  board: BoardType,
  list: CardListType,
  card: CardType
) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .put('/api/scrumboard/edit/card', { board, list, card })
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: EDIT_LIST_CARD, payload: data.data });
          dispatch(showMessage(String(messages['scrumBoard.cardEdited'])));
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onDeleteSelectedCard = (
  boardId: number,
  listId: number,
  cardId: number
) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .post('/api/scrumboard/delete/card', { boardId, listId, cardId })
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: DELETE_LIST_CARD, payload: data.data });
          dispatch(showMessage(String(messages['scrumBoard.cardDeleted'])));
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onDeleteSelectedBoard = (boardId: number) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .post('/api/scrumboard/delete/board', { boardId })
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: DELETE_BOARD, payload: data.data });
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onDeleteSelectedList = (boardId: number, listId: number) => {
  const { messages } = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    jwtAxios
      .post('/api/scrumboard/delete/list', { boardId, listId })
      .then((data: any) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
          dispatch({ type: DELETE_LIST, payload: data.data });
          dispatch(showMessage(String(messages['scrumBoard.listDeleted'])));
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};

export const onNullifyBoardDetail = () => {
  return {
    type: GET_BOARD_DETAIL,
    payload: null,
  };
};
