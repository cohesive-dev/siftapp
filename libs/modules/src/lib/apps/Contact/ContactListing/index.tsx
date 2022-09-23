import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {useRouter} from "next/router";
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

type Props = {
  apiData: ContactType;
  loading: boolean;
  setQueryParams: (params: any) => void;
  reCallAPI: () => void;
  setData: (data: ContactType) => void;
};
const ContactListing = ({
  apiData,
  loading,
  setQueryParams,
  setData,
  reCallAPI,
}: Props) => {
  const { pathname } = useRouter();
  const infoViewActionsContext = useInfoViewActionsContext();

  const [filterText, onSetFilterText] = useState('');

  const [page, setPage] = useState(0);

  const [pageView, setPageView] = useState<string>('list');

  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);

  const [checkedContacts, setCheckedContacts] = useState<number[]>([]);

  const [toDeleteContacts, setToDeleteContacts] = useState<number[]>([]);

  const [isAddContact, onSetIsAddContact] = useState<boolean>(false);

  const [isShowDetail, onShowDetail] = useState<boolean>(false);

  const [selectedContact, setSelectedContact] = useState<ContactObjType | null>(
    null
  );

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    const path = pathname.split('/');
    setQueryParams({
      type: path[path.length - 2],
      name: path[path.length - 1],
      page: page,
    });
  }, [pathname, pageView, page]);

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

  const onOpenEditContact = (contact: ContactObjType | null) => {
    setSelectedContact(contact);
    handleAddContactOpen();
  };

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    value: number
  ) => {
    setPage(value);
  };

  const onChangePageView = (view: string) => {
    setPageView(view);
  };

  const onChangeCheckedContacts = (event: any, id: number) => {
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
    setData({
      data: apiData?.data.map((item: ContactObjType) => {
        if (item.id === contact.id) {
          return contact;
        }
        return item;
      }),
      count: apiData?.count,
    });
  };

  const onUpdateContacts = (contacts: ContactObjType[]) => {
    setData({
      data: apiData?.data.map((item: ContactObjType) => {
        const contact = contacts.find((contact) => contact.id === item.id);
        if (contact) {
          return contact;
        }
        return item;
      }),
      count: apiData?.count,
    });
  };

  const onUpdateContact = (contact: ContactObjType) => {
    setSelectedContact(contact);
    handleAddContactClose();
  };

  const onGetFilteredItems = () => {
    if (filterText === '') {
      return apiData?.data;
    } else {
      return apiData?.data.filter((contact: ContactObjType) =>
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
        setData(data);
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
          apiData={apiData}
          onUpdateContacts={onUpdateContacts}
          onSelectContactsForDelete={onSelectContactsForDelete}
          onSetFilterText={onSetFilterText}
          onPageChange={onPageChange}
          page={page}
          onChangePageView={onChangePageView}
          pageView={pageView}
        />
      </AppsHeader>
      <AppsContent>
        <ContactView
          list={list}
          loading={loading}
          pageView={pageView}
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
        {apiData?.data?.length > 0 ? (
          <AppsFooter>
            <AppsPagination
              count={apiData?.count}
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
        reCallAPI={reCallAPI}
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

ContactListing.propTypes = {
  apiData: PropTypes.object,
  loading: PropTypes.bool,
  setQueryParams: PropTypes.func,
  setData: PropTypes.func,
  reCallAPI: PropTypes.func,
};
