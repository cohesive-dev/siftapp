import Box from '@mui/material/Box';
import React from 'react';
import AppList from '@sift/components/AppList';
import AppGrid from '@sift/components/AppGrid';
import ListEmptyResult from '@sift/components/AppList/ListEmptyResult';
import IntlMessages from '@sift/helpers/IntlMessages';
import ContactListSkeleton from '@sift/components/ContactListSkeleton';
import { Hidden } from '@mui/material';
import {
  ContactGridItem,
  ContactListItem,
  ContactListItemMobile,
} from '@sift/modules/apps/Contact';
import { ContactObjType } from '@sift/models/apps/Contact';
import { useContactContext } from '../../../context/ContactContextProvider';

type Props = {
  list: ContactObjType[];
  handleAddContactOpen: () => void;
  onChangeStarred: (isStarred: boolean, contact: ContactObjType) => void;
  onChangeCheckedContacts: (event: any, id: number) => void;
  checkedContacts: number[];
  onSelectContactsForDelete: (contactIds: number[]) => void;
  onOpenEditContact: (contact: ContactObjType) => void;
  onViewContactDetail: (contact: ContactObjType) => void;
};

const ContactView = (props: Props) => {
  const {
    list,
    handleAddContactOpen,
    onChangeStarred,
    onChangeCheckedContacts,
    checkedContacts,
    onSelectContactsForDelete,
    onOpenEditContact,
    onViewContactDetail,
  } = props;

  const { pageView, loading, labelList } = useContactContext();

  return (
    <>
      {pageView === 'list' ? (
        <>
          <Hidden smDown>
            <AppList
              data={list}
              animation="transition.slideUpIn"
              sx={{
                pt: 0,
                pb: 0,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={loading}
                  actionTitle={<IntlMessages id="contactApp.createContact" />}
                  onClick={handleAddContactOpen}
                  placeholder={<ContactListSkeleton />}
                />
              }
              renderRow={(contact) => (
                <ContactListItem
                  key={contact.id}
                  contact={contact}
                  labelList={labelList}
                  onChangeCheckedContacts={onChangeCheckedContacts}
                  checkedContacts={checkedContacts}
                  onSelectContactsForDelete={onSelectContactsForDelete}
                  onChangeStarred={onChangeStarred}
                  onViewContactDetail={onViewContactDetail}
                  onOpenEditContact={onOpenEditContact}
                />
              )}
            />
          </Hidden>

          <Hidden smUp>
            <AppList
              data={list}
              animation="transition.slideUpIn"
              sx={{
                pt: 0,
                pb: 0,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={loading}
                  actionTitle={<IntlMessages id="contactApp.createContact" />}
                  onClick={handleAddContactOpen}
                  placeholder={<ContactListSkeleton />}
                />
              }
              renderRow={(contact) => (
                <ContactListItemMobile
                  key={contact.id}
                  contact={contact}
                  checkedContacts={checkedContacts}
                  labelList={labelList}
                  onChangeStarred={onChangeStarred}
                  onViewContactDetail={onViewContactDetail}
                  onOpenEditContact={onOpenEditContact}
                />
              )}
            />
          </Hidden>
        </>
      ) : (
        <Box
          sx={{
            px: 5,
            pt: 0.5,
            pb: 3,
          }}
        >
          <AppGrid
            responsive={{
              xs: 1,
              sm: 2,
              md: 3,
              lg: 2,
              xl: 3,
            }}
            data={list}
            renderRow={(contact) => (
              <ContactGridItem
                key={contact.id}
                contact={contact}
                labelList={labelList}
                onChangeCheckedContacts={onChangeCheckedContacts}
                checkedContacts={checkedContacts}
                onChangeStarred={onChangeStarred}
                onSelectContactsForDelete={onSelectContactsForDelete}
                onViewContactDetail={onViewContactDetail}
                onOpenEditContact={onOpenEditContact}
              />
            )}
          />
        </Box>
      )}
    </>
  );
};

export default ContactView;

ContactView.defaultProps = {
  list: [],
  checkedContacts: [],
};
