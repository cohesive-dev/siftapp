import { ContactObjType, FolderType, LabelType } from '../models/apps/Contact';

export const CREATE_NEW_CONTACT = 'CREATE_NEW_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const GET_CONTACT_FOLDER_LIST = 'GET_CONTACT_FOLDER_LIST';
export const GET_CONTACT_LABEL_LIST = 'GET_CONTACT_LABEL_LIST';
export const GET_CONTACT_LIST = 'GET_CONTACT_LIST';
export const UPDATE_CONTACT_STARRED_STATUS = 'UPDATE_CONTACT_STARRED_STATUS';
export const UPDATE_CONTACT_DETAIL = 'UPDATE_CONTACT_DETAIL';
export const UPDATE_CONTACT_LABEL = 'UPDATE_CONTACT_LABEL';
export const TOGGLE_CONTACT_DRAWER = 'TOGGLE_CONTACT_DRAWER';

export type GetContactFolderActions = {
  type: typeof GET_CONTACT_FOLDER_LIST;
  payload: FolderType[];
};

export type GetContactLabelActions = {
  type: typeof GET_CONTACT_LABEL_LIST;
  payload: LabelType;
};

export type GetContactsActions = {
  type: typeof GET_CONTACT_LIST;
  payload: { data: ContactObjType[]; count: number };
};

export type UpdateContactStarActions = {
  type: typeof UPDATE_CONTACT_STARRED_STATUS;
  payload: { data: ContactObjType[]; folderName: string };
};

export type UpdateContactActions = {
  type: typeof UPDATE_CONTACT_DETAIL;
  payload: ContactObjType;
};

export type UpdateContactLabelActions = {
  type: typeof UPDATE_CONTACT_LABEL;
  payload: { data: ContactObjType[]; labelName: string; labelType: number };
};

export type CreateContactActions = {
  type: typeof CREATE_NEW_CONTACT;
  payload: ContactObjType;
};

export type DeleteContactActions = {
  type: typeof DELETE_CONTACT;
  payload: { list: ContactObjType[]; total: number };
};

export type ToggleContactDrawerActions = {
  type: typeof TOGGLE_CONTACT_DRAWER;
};

export type ContactActions =
  | GetContactFolderActions
  | GetContactLabelActions
  | GetContactsActions
  | UpdateContactStarActions
  | UpdateContactActions
  | UpdateContactLabelActions
  | CreateContactActions
  | ToggleContactDrawerActions
  | DeleteContactActions;
