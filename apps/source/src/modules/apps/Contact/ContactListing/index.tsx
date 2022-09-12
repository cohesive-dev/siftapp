import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ContactHeader from './ContactHeader';
import AppConfirmDialog from '@sift/components/AppConfirmDialog';
import IntlMessages from '@sift/helpers/IntlMessages';
import CreateContact from '../CreateContact';
import { Hidden } from '@mui/material';
import ContactView from './ContactView';
import ContactDetail from '../ContactDetail';
import AppsPagination from '@sift/components/AppsPagination';
import AppsHeader from '@sift/components/AppsHeader';
import AppsContent from '@sift/components/AppsContent';
import AppsFooter from '@sift/components/AppsFooter';
import { useInfoViewActionsContext } from '@sift/context/InfoViewContextProvider';
import { postDataApi, putDataApi } from '@sift/hooks/APIHooks';
import { ContactObjType, ContactType } from '@sift/models/apps/Contact';
import {
  useContactActionsContext,
  useContactContext,
} from '../../context/ContactContextProvider';

const ContactListing = () => {
  const { page, contactList } = useContactContext();
  const { setContactData, onPageChange } = useContactActionsContext();

  const { pathname } = useRouter();
  const infoViewActionsContext = useInfoViewActionsContext();

  const [filterText, onSetFilterText] = useState('');

  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);

  const [checkedContacts, setCheckedContacts] = useState<number[]>([]);

  const [toDeleteContacts, setToDeleteContacts] = useState<number[]>([]);

  const [isAddContact, onSetIsAddContact] = useState<boolean>(false);

  const [isShowDetail, onShowDetail] = useState<boolean>(false);

  const [selectedContact, setSelectedContact] = useState<ContactObjType | null>(
    null
  );

  const handleAddContactOpen = () => {
    onSetIsAddContact(true);
  };

  const handleAddContactClose = () => {
    onSetIsAddContact(false);
  };

  const onViewContactDetail = (contact: ContactObjType) => {
    setSelectedContact(contact);
    onShowDetail(true);
  };

  const onOpenEditContact = (contact: ContactObjType) => {
    setSelectedContact(contact);
    handleAddContactOpen();
  };

  const onChangeCheckedContacts = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    if (event.target.checked) {
      setCheckedContacts(checkedContacts.concat(id));
    } else {
      setCheckedContacts(
        checkedContacts.filter((contactId) => contactId !== id)
      );
    }
  };

  const onChangeStarred = (status: boolean, contact: ContactObjType) => {
    const selectedIdList = [contact.id];
    putDataApi<ContactObjType[]>(
      '/api/contactApp/update/starred',
      infoViewActionsContext,
      {
        contactIds: selectedIdList,
        status: status,
      }
    )
      .then((data) => {
        onUpdateSelectedContact(data[0]);
        infoViewActionsContext.showMessage(
          data[0].isStarred
            ? 'Contact Marked as Starred Successfully'
            : 'Contact Marked as Unstarred Successfully'
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onUpdateSelectedContact = (contact: ContactObjType) => {
    setContactData({
      data: contactList?.data.map((item) => {
        if (item.id === contact.id) {
          return contact;
        }
        return item;
      }),
      count: contactList?.count,
    });
  };

  const onUpdateContacts = (contacts: ContactObjType[]) => {
    setContactData({
      data: contactList?.data.map((item) => {
        const contact = contacts.find((contact) => contact.id === item.id);
        if (contact) {
          return contact;
        }
        return item;
      }),
      count: contactList?.count,
    });
  };

  const onUpdateContact = (contact: ContactObjType) => {
    setSelectedContact(contact);
    handleAddContactClose();
  };

  const onGetFilteredItems = () => {
    if (filterText === '') {
      return contactList?.data;
    } else {
      return contactList?.data.filter((contact) =>
        contact.name.toUpperCase().includes(filterText.toUpperCase())
      );
    }
  };

  const onDeleteSelectedContacts = () => {
    const path = pathname.split('/');
    postDataApi<ContactType>(
      '/api/contactApp/delete/contact',
      infoViewActionsContext,
      {
        type: path[path.length - 2],
        name: path[path.length - 1],
        contactIds: toDeleteContacts,
        page,
      }
    )
      .then((data) => {
        setContactData(data);
        infoViewActionsContext.showMessage('Contact Deleted Successfully');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
    setDeleteDialogOpen(false);
    setCheckedContacts([]);
  };

  const onSelectContactsForDelete = (contactIds: number[]) => {
    setToDeleteContacts(contactIds);
    setDeleteDialogOpen(true);
  };

  const list = onGetFilteredItems();

  return (
    <>
      <AppsHeader>
        <ContactHeader
          checkedContacts={checkedContacts}
          setCheckedContacts={setCheckedContacts}
          filterText={filterText}
          onUpdateContacts={onUpdateContacts}
          onSelectContactsForDelete={onSelectContactsForDelete}
          onSetFilterText={onSetFilterText}
        />
      </AppsHeader>
      <AppsContent>
        <ContactView
          list={list}
          handleAddContactOpen={handleAddContactOpen}
          onChangeCheckedContacts={onChangeCheckedContacts}
          onChangeStarred={onChangeStarred}
          checkedContacts={checkedContacts}
          onSelectContactsForDelete={onSelectContactsForDelete}
          onViewContactDetail={onViewContactDetail}
          onOpenEditContact={onOpenEditContact}
        />
      </AppsContent>

      <Hidden smUp>
        {contactList?.data?.length > 0 ? (
          <AppsFooter>
            <AppsPagination
              count={contactList?.count}
              page={page}
              onPageChange={onPageChange}
            />
          </AppsFooter>
        ) : null}
      </Hidden>

      <CreateContact
        isAddContact={isAddContact}
        handleAddContactClose={handleAddContactClose}
        selectContact={selectedContact}
        onUpdateContact={onUpdateContact}
      />

      <ContactDetail
        selectedContact={selectedContact}
        isShowDetail={isShowDetail}
        onShowDetail={onShowDetail}
        onChangeStarred={onChangeStarred}
        onSelectContactsForDelete={onSelectContactsForDelete}
        onOpenEditContact={onOpenEditContact}
      />

      <AppConfirmDialog
        open={isDeleteDialogOpen}
        onDeny={setDeleteDialogOpen}
        onConfirm={onDeleteSelectedContacts}
        title={<IntlMessages id="contactApp.deleteContact" />}
        dialogTitle={<IntlMessages id="common.deleteItem" />}
      />
    </>
  );
};

export default ContactListing;
