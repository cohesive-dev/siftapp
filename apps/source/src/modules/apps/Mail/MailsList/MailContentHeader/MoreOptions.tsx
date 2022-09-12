import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IntlMessages from '@sift/helpers/IntlMessages';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AppTooltip from '@sift/components/AppTooltip';
import { useInfoViewActionsContext } from '@sift/context/InfoViewContextProvider';
import { putDataApi } from '@sift/hooks/APIHooks';
import { useMailActionsContext } from '../../../context/MailContextProvider';
import { MailType } from '@sift/models/apps/Mail';
import { APIDataProps } from '@sift/models/APIDataProps';

type Props = {
  checkedMails: number[];
  setCheckedMails: (data: number[]) => void;
  mailList: MailType[];
};
const MoreOptions = (props: Props) => {
  const { checkedMails, setCheckedMails, mailList } = props;
  const { setMailData } = useMailActionsContext();

  const infoViewActionsContext = useInfoViewActionsContext();

  let unReadOption;
  let readOption;
  let starredOption;
  let unStarredOption;

  const [isMoreIcon, onOpenMoreIcon] = useState(null);

  mailList.map((mail) => {
    if (checkedMails.includes(mail.id) && mail.isRead) {
      unReadOption = true;
    }
    if (checkedMails.includes(mail.id) && !mail.isRead) {
      readOption = true;
    }
    if (checkedMails.includes(mail.id) && mail.isStarred) {
      unStarredOption = true;
    }
    if (checkedMails.includes(mail.id) && !mail.isStarred) {
      starredOption = true;
    }
    return null;
  });

  const onViewMoreOpen = (event: any) => {
    onOpenMoreIcon(event.currentTarget);
  };

  const onViewMoreClose = () => {
    onOpenMoreIcon(null);
  };

  const onChangeReadStatus = (statusValue: number) => {
    const status = !!statusValue;
    putDataApi<APIDataProps<MailType[]>>(
      '/api/mailApp/update/read',
      infoViewActionsContext,
      {
        mailIds: checkedMails,
        status: status,
      }
    )
      .then((data) => {
        setMailData(data);
        setCheckedMails([]);
        onOpenMoreIcon(null);
        infoViewActionsContext.showMessage(
          `Email marked as ${status ? 'read' : 'unread'}`
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onChangeAllReadStatus = (statusValue: number) => {
    const status = !!statusValue;
    const allMails = mailList.map((mail) => mail.id);
    putDataApi<APIDataProps<MailType[]>>(
      '/api/mailApp/update/read',
      infoViewActionsContext,
      {
        mailIds: allMails,
        status: status,
      }
    )
      .then((data) => {
        setMailData(data);
        onOpenMoreIcon(null);
        setCheckedMails([]);
        infoViewActionsContext.showMessage(
          `Email marked as ${status ? 'read' : 'unread'}`
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onChangeAllStarred = (status: number) => {
    const allMails = mailList.map((mail) => mail.id);
    putDataApi<APIDataProps<MailType[]>>(
      '/api/mailApp/update/starred',
      infoViewActionsContext,
      {
        mailIds: allMails,
        status: status,
      }
    )
      .then((data) => {
        setMailData(data);
        setCheckedMails([]);
        onOpenMoreIcon(null);
        infoViewActionsContext.showMessage(
          `Email(s) marked as ${status ? 'stared' : 'unread'}`
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onChangeStarredStatus = (status: number) => {
    putDataApi<APIDataProps<MailType[]>>(
      '/api/mailApp/update/starred',
      infoViewActionsContext,
      {
        mailIds: checkedMails,
        status: status,
      }
    )
      .then((data) => {
        setMailData(data);
        setCheckedMails([]);
        onOpenMoreIcon(null);
        infoViewActionsContext.showMessage(
          `Email(s) marked as ${status ? 'stared' : 'unread'}`
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <>
      {checkedMails.length > 0 ? (
        <Box component="span" sx={{ ml: { xs: 'auto', sm: 0 } }}>
          <AppTooltip title={<IntlMessages id="common.more" />}>
            <IconButton
              sx={{
                color: (theme) => theme.palette.text.disabled,
              }}
              onClick={onViewMoreOpen}
              size="large"
            >
              <MoreVertIcon />
            </IconButton>
          </AppTooltip>

          <Menu
            anchorEl={isMoreIcon}
            open={Boolean(isMoreIcon)}
            onClose={onViewMoreClose}
          >
            {readOption ? (
              <MenuItem onClick={() => onChangeReadStatus(1)}>
                <IntlMessages id="mailApp.markAsRead" />
              </MenuItem>
            ) : null}
            {unReadOption ? (
              <MenuItem onClick={() => onChangeReadStatus(0)}>
                <IntlMessages id="mailApp.markAsUnread" />
              </MenuItem>
            ) : null}
            {starredOption ? (
              <MenuItem onClick={() => onChangeStarredStatus(1)}>
                <IntlMessages id="mailApp.markAsImportant" />
              </MenuItem>
            ) : null}
            {unStarredOption ? (
              <MenuItem onClick={() => onChangeStarredStatus(0)}>
                <IntlMessages id="mailApp.markAsNotImportant" />
              </MenuItem>
            ) : null}
          </Menu>
        </Box>
      ) : (
        <Box component="span" sx={{ ml: { xs: 'auto', sm: 0 } }}>
          <AppTooltip title={<IntlMessages id="common.more" />}>
            <IconButton
              sx={{
                color: (theme) => theme.palette.text.disabled,
              }}
              onClick={onViewMoreOpen}
              size="large"
            >
              <MoreVertIcon />
            </IconButton>
          </AppTooltip>

          <Menu
            anchorEl={isMoreIcon}
            open={Boolean(isMoreIcon)}
            onClose={onViewMoreClose}
          >
            <MenuItem onClick={() => onChangeAllReadStatus(1)}>
              <IntlMessages id="mailApp.markAllAsRead" />
            </MenuItem>
            <MenuItem onClick={() => onChangeAllReadStatus(0)}>
              <IntlMessages id="mailApp.markAllAsUnread" />
            </MenuItem>
            <MenuItem onClick={() => onChangeAllStarred(1)}>
              <IntlMessages id="mailApp.markAllAsImportant" />
            </MenuItem>
            <MenuItem onClick={() => onChangeAllStarred(0)}>
              <IntlMessages id="mailApp.markAllAsNotImportant" />
            </MenuItem>
          </Menu>
        </Box>
      )}
    </>
  );
};

export default MoreOptions;

MoreOptions.defaultProps = {
  checkedMails: [],
};
