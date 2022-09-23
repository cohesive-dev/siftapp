// action strings
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const TOGGLE_APP_DRAWER = 'TOGGLE_APP_DRAWER';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';

export type FetchStartAction = {
  type: typeof FETCH_START;
};

export type FetchSuccessAction = {
  type: typeof FETCH_SUCCESS;
};

export type FetchErrorAction = {
  type: typeof FETCH_ERROR;
  payload: string;
};

export type ShowMessageAction = {
  type: typeof SHOW_MESSAGE;
  payload: string;
};

export type ToggleDrawerAction = {
  type: typeof TOGGLE_APP_DRAWER;
};

export type HideMessageAction = {
  type: typeof HIDE_MESSAGE;
};

export type CommonActionTypes =
  | FetchStartAction
  | FetchSuccessAction
  | FetchErrorAction
  | ShowMessageAction
  | ToggleDrawerAction
  | HideMessageAction;
