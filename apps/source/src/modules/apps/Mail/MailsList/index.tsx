import React, { useState } from 'react';
import { useRouter } from 'next/router';
import MailContentHeader from './MailContentHeader';
import { Hidden } from '@mui/material';
import AppsPagination from '@sift/components/AppsPagination';
import AppsContent from '@sift/components/AppsContent';
import AppsHeader from '@sift/components/AppsHeader';
import AppsFooter from '@sift/components/AppsFooter';
import AppList from '@sift/components/AppList';
import ListEmptyResult from '@sift/components/AppList/ListEmptyResult';
import EmailListSkeleton from '@sift/components/EmailListSkeleton';
import MailListItem from './MailListItem';
import { useInfoViewActionsContext } from '@sift/context/InfoViewContextProvider';
import { MailType } from '@sift/models/apps/Mail';
import { putDataApi } from '@sift/hooks/APIHooks';
import { MailListItemMobile } from '@sift/modules/apps/Mail';
import {
  useMailActionsContext,
  useMailContext,
} from '../../context/MailContextProvider';

const MailsList = () => {
  const router = useRouter();
  const { page, all, folder, label, mailList, loading } = useMailContext();
  const infoViewActionsContext = useInfoViewActionsContext();
  const { onPageChange, setMailData } = useMailActionsContext();

  const [checkedMails, setCheckedMails] = useState<number[]>([]);

  const [filterText, onSetFilterText] = useState('');

  const onChangeCheckedMails = (checked: boolean, id: number) => {
    if (checked) {
      setCheckedMails(checkedMails.concat(id));
    } else {
      setCheckedMails(checkedMails.filter((mailId) => mailId !== id));
    }
  };

  const onNavigatePage = (mail: MailType) => {
    if (label) router.push(`/apps/mail/label/${label}/${mail.id}`);
    if (folder) router.push(`/apps/mail/${folder}/${mail.id}`);
  };

  const onViewMailDetail = (mail: MailType) => {
    if (mail.isRead) {
      if (typeof all !== "string") {
        router.push(`/apps/mail/${all.join('/')}/${mail.id}`);
      }
    } else {
      mail.isRead = true;
      putDataApi<MailType>('/api/mailApp/mail/', infoViewActionsContext, {
        mail,
      })
        .then((data) => {
          onNavigatePage(mail);
          onUpdateItem(data);
          infoViewActionsContext.showMessage(
            mail.isRead
              ? 'Mail Marked as Read Successfully'
              : 'Mail Marked as Unread Successfully'
          );
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    }
  };

  const onChangeStarred = (checked: boolean, mail: MailType) => {
    putDataApi<MailType[]>(
      '/api/mailApp/update/starred',
      infoViewActionsContext,
      {
        mailIds: [mail.id],
        status: checked,
      }
    )
      .then((data) => {
        onUpdateItem(data[0]);
        infoViewActionsContext.showMessage(
          checked
            ? 'Mail Marked as Starred Successfully'
            : 'Mail Marked as Unstarred Successfully'
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onUpdateItem = (data: MailType) => {
    setMailData({
      data: mailList?.data.map((item) => {
        if (item.id === data.id) {
          return data;
        }
        return item;
      }),
      count: mailList?.count,
    });
  };

  const onGetFilteredMails = () => {
    if (filterText === '') {
      return mailList?.data;
    } else {
      return mailList?.data.filter(
        (mail) =>
          mail?.subject?.toLowerCase()?.includes(filterText.toLowerCase()) ||
          mail?.detail?.toLowerCase()?.includes(filterText.toLowerCase())
      );
    }
  };

  const onRemoveItem = (data: MailType) => {
    setMailData({
      data: mailList?.data.filter((item) => item.id !== data.id),
      count: mailList?.count - 1,
    });
  };
  console.log(mailList?.data)
  const list = onGetFilteredMails();
  return (
    <>
      <AppsHeader>
        <MailContentHeader
          checkedMails={checkedMails}
          setCheckedMails={setCheckedMails}
          onPageChange={onPageChange}
          filterText={filterText}
          onSetFilterText={onSetFilterText}
          mailList={list}
          totalMails={mailList?.count as number}
        />
      </AppsHeader>
      <AppsContent>
        <Hidden smDown>
          <AppList
            sx={{
              paddingTop: 0,
              paddingBottom: 0,
            }}
            data={list}
            ListEmptyComponent={
              <ListEmptyResult
                loading={loading}
                placeholder={<EmailListSkeleton />}
              />
            }
            renderRow={(mail) => (
              <MailListItem
                key={mail.id}
                mail={mail}
                onChangeCheckedMails={onChangeCheckedMails}
                checkedMails={checkedMails}
                onViewMailDetail={onViewMailDetail}
                onChangeStarred={onChangeStarred}
                onRemoveItem={onRemoveItem}
                onUpdateItem={onUpdateItem}
              />
            )}
          />
        </Hidden>
        <Hidden smUp>
          <AppList
            sx={{
              paddingTop: 0,
              paddingBottom: 0,
            }}
            data={list}
            ListEmptyComponent={
              <ListEmptyResult
                loading={loading}
                placeholder={<EmailListSkeleton />}
              />
            }
            renderRow={(mail) => (
              <MailListItemMobile
                key={mail.id}
                mail={mail}
                checkedMails={checkedMails}
                onChangeCheckedMails={onChangeCheckedMails}
                onViewMailDetail={onViewMailDetail}
                onChangeStarred={onChangeStarred}
              />
            )}
          />
        </Hidden>
      </AppsContent>
      <Hidden smUp>
        {list?.length > 0 ? (
          <AppsFooter>
            <AppsPagination
              count={mailList?.count as number}
              page={page}
              onPageChange={onPageChange}
            />
          </AppsFooter>
        ) : null}
      </Hidden>
    </>
  );
};

export default MailsList;
