export const NAV_COLLAPSED = 'NAV_COLLAPSED';
export const TOGGLE_NAV_COLLAPSED = 'TOGGLE_NAV_COLLAPSED';
export const SET_INITIAL_PATH = 'SET_INITIAL_PATH';
export const ROUTE_CHANGE = '@@router/LOCATION_CHANGE';

export type ToggleNavCollapsedAction = {
  type: typeof TOGGLE_NAV_COLLAPSED;
};
export type NavCollapsedAction = {
  type: typeof NAV_COLLAPSED;
};

export type SetInitialPathAction = {
  type: typeof SET_INITIAL_PATH;
  payload: string | undefined;
};

export type RouteChangeAction = {
  type: typeof ROUTE_CHANGE;
};

export type SettingsActionTypes =
  | ToggleNavCollapsedAction
  | SetInitialPathAction
  | NavCollapsedAction
  | RouteChangeAction;
