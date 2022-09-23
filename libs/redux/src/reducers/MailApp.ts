import {
  CHANGE_READ_STATUS,
  COMPOSE_MAIL,
  GET_CONNECTION_LIST,
  GET_FOLDER_LIST,
  GET_LABEL_LIST,
  GET_MAIL_DETAIL,
  GET_MAIL_LIST,
  MailActions,
  NULLIFY_MAIL,
  TOGGLE_MAIL_DRAWER,
  UPDATE_MAIL_FOLDER,
  UPDATE_MAIL_LABEL,
  UPDATE_STARRED_STATUS,
  UPDATED_MAIL_DETAIL,
} from '@sift/actions/Mail.action';
import {
  ConnectionType,
  FolderType,
  LabelType,
  MailType,
} from '@sift/models/apps/Mail';

const initialState: {
  mailList: MailType[];
  totalMails: number;
  mailDrawer: boolean;
  labelList: LabelType[];
  folderList: FolderType[];
  selectedMail: MailType | null;
  connectionList: ConnectionType[];
} = {
  mailList: [],
  totalMails: 0,
  mailDrawer: false,
  labelList: [],
  folderList: [],
  selectedMail: null,
  connectionList: [],
};

const MailApp = (state = initialState, action: MailActions) => {
  switch (action.type) {
    case GET_MAIL_LIST:
      return {
        ...state,
        mailList: action.payload.list,
        totalMails: action.payload.total,
      };

    case GET_FOLDER_LIST:
      return {
        ...state,
        folderList: action.payload,
      };

    case TOGGLE_MAIL_DRAWER:
      return {
        ...state,
        mailDrawer: !state.mailDrawer,
      };

    case GET_LABEL_LIST:
      return {
        ...state,
        labelList: action.payload,
      };

    case GET_CONNECTION_LIST:
      return {
        ...state,
        connectionList: action.payload,
      };

    case COMPOSE_MAIL:
      const path = action.payload.pathname.split('/');
      let newMailList;
      let newTotalMails;
      if (
        path[path.length - 2] === 'folder' &&
        path[path.length - 1] === 'sent'
      ) {
        newMailList = [action.payload.data, ...state.mailList];
        newTotalMails = state.totalMails + 1;
      } else {
        newMailList = state.mailList;
        newTotalMails = state.totalMails;
      }
      return {
        ...state,
        mailList: newMailList,
        totalMails: newTotalMails,
      };

    case UPDATE_MAIL_FOLDER: {
      const updatedList = state.mailList.filter(
        (mail: MailType) => !action.payload.includes(mail.id)
      );
      return {
        ...state,
        mailList: updatedList,
        totalMails: state.totalMails - action.payload.length,
      };
    }

    case UPDATE_MAIL_LABEL: {
      const mailIds = action.payload.map((mail) => mail.id);
      const updatedList = state.mailList.map((mail) => {
        if (mailIds.includes(mail.id)) {
          return action.payload.find(
            (selectedMail) => selectedMail.id === mail.id
          );
        } else {
          return mail;
        }
      });
      return {
        ...state,
        mailList: updatedList,
      };
    }

    case CHANGE_READ_STATUS: {
      const mailIds = action.payload.map((mail) => mail.id);
      const updatedList = state.mailList.map((mail) => {
        if (mailIds.includes(mail.id)) {
          return action.payload.find(
            (selectedMail) => selectedMail.id === mail.id
          );
        } else {
          return mail;
        }
      });
      return {
        ...state,
        mailList: updatedList,
      };
    }

    case UPDATE_STARRED_STATUS: {
      const mailIds = action.payload.data.map((mail) => mail.id);
      const updatedList = state.mailList.map((mail) => {
        if (mailIds.includes(mail.id)) {
          return action.payload.data.find(
            (selectedMail) => selectedMail.id === mail.id
          );
        } else {
          return mail;
        }
      });
      const filteredList =
        action.payload.folderName === 'starred'
          ? updatedList.filter((item) => item!.isStarred)
          : updatedList;
      const total =
        action.payload.folderName === 'starred'
          ? state.totalMails - action.payload.data.length
          : state.totalMails;
      return {
        ...state,
        mailList: filteredList,
        totalMails: total,
      };
    }

    case GET_MAIL_DETAIL:
      return {
        ...state,
        selectedMail: action.payload,
      };

    case UPDATED_MAIL_DETAIL:
      return {
        ...state,
        selectedMail: action.payload,
      };

    case NULLIFY_MAIL:
      return {
        ...state,
        selectedMail: null,
      };

    default:
      return state;
  }
};
export default MailApp;
