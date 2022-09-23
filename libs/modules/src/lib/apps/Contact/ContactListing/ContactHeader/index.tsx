import React from 'react';
import Box from '@mui/material/Box';
import AppSearchBar from '@sift/components/AppSearchBar';
import { Hidden } from '@mui/material';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import CheckBox from './CheckBox';
import ContactCheckedActions from './ContactCheckedActions';
import ViewSelectButtons from './ViewSelectButtons';
import AppsPagination from '@sift/components/AppsPagination';
import { ContactObjType, ContactType } from '@sift/models/apps/Contact';

type Props = {
  apiData: ContactType;
  onUpdateContacts: (checkedContacts: ContactObjType[]) => void;
  checkedContacts: number[];
  setCheckedContacts: (checkedContacts: number[]) => void;
  filterText: string;
  onSetFilterText: (filterText: string) => void;
  onChangePageView: (pageView: string) => void;
  onSelectContactsForDelete: (ids: number[]) => void;
  page: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void;
  pageView: string;
};

const ContactHeader = (props: Props) => {
  const {
    checkedContacts,
    setCheckedContacts,
    filterText,
    onSetFilterText,
    apiData,
    onUpdateContacts,
    onChangePageView,
    onSelectContactsForDelete,
    page,
    onPageChange,
    pageView,
  } = props;

  const { messages } = useIntl();

  return (
    <>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <CheckBox
          contactList={apiData?.data || []}
          checkedContacts={checkedContacts}
          setCheckedContacts={setCheckedContacts}
        />

        <AppSearchBar
          iconPosition="right"
          overlap={false}
          value={filterText}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onSetFilterText(event.target.value)
          }
          placeholder={messages['common.searchHere'] as string}
        />
        {checkedContacts.length > 0 ? (
          <ContactCheckedActions
            onSelectContactsForDelete={onSelectContactsForDelete}
            checkedContacts={checkedContacts}
            setCheckedContacts={setCheckedContacts}
            onUpdateContacts={onUpdateContacts}
          />
        ) : null}

        <ViewSelectButtons
          pageView={pageView}
          onChangePageView={onChangePageView}
        />
      </Box>
      <Hidden smDown>
        {apiData?.data?.length > 0 ? (
          <AppsPagination
            sx={{ ml: 2 }}
            count={apiData?.count}
            page={page}
            onPageChange={onPageChange}
          />
        ) : null}
      </Hidden>
    </>
  );
};

export default ContactHeader;

ContactHeader.defaultProps = {
  checkedContacts: [],
  filterText: '',
  page: 0,
};

ContactHeader.propTypes = {
  checkedContacts: PropTypes.array,
  setCheckedContacts: PropTypes.func,
  filterText: PropTypes.string,
  onSetFilterText: PropTypes.func,
  apiData: PropTypes.object,
  onUpdateContacts: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
  page: PropTypes.number,
  onPageChange: PropTypes.func,
  pageView: PropTypes.string.isRequired,
  onChangePageView: PropTypes.func,
};
