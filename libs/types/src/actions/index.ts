import { CommonActionTypes } from './Common.action';
import { SettingsActionTypes } from './Settings.action';
import { DashboardActionTypes } from './Dashboard.action';
import { EcommerceActionTypes } from './Ecommerce.action';
import { AuthActions } from './Auth.actions';
import { ChatActions } from './Chat.actions';
import { ContactActions } from './Contact.actions';
import { MailActions } from './Mail.action';
import { TaskActions } from './Todo.action';
import { WallActions } from './Wall.actions';
import { ScrumboardActions } from './Scrumboard.actions';
import { UserListActions } from './UserList.actions';

export type AppActions =
  | CommonActionTypes
  | SettingsActionTypes
  | DashboardActionTypes
  | EcommerceActionTypes
  | AuthActions
  | ChatActions
  | MailActions
  | TaskActions
  | WallActions
  | ScrumboardActions
  | ContactActions
  | UserListActions;
