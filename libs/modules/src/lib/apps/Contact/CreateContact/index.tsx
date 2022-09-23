import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import AddContactForm from './AddContactForm';
import AppDialog from '@sift/components/AppDialog';
import { useInfoViewActionsContext } from '@sift/context/InfoViewContextProvider';
import { postDataApi, putDataApi } from '@sift/hooks/APIHooks';
import { ContactObjType } from '@sift/models/apps/Contact';
import { useIntl } from 'react-intl';

interface Props {
  isAddContact: boolean;
  handleAddContactClose: () => void;
  reCallAPI: () => void;
  selectContact?: ContactObjType | null;
  onUpdateContact?: (newContact: ContactObjType) => void;
}

const CreateContact = (props: Props) => {
  const {
    isAddContact,
    handleAddContactClose,
    selectContact,
    onUpdateContact,
    reCallAPI,
  } = props;

  const { messages } = useIntl();

  const validationSchema = yup.object({
    name: yup.string().required(String(messages['validation.nameRequired'])),
    email: yup
      .string()
      .email(String(messages['validation.emailFormat']))
      .required(String(messages['validation.emailRequired'])),
    contact: yup
      .string()
      .required(String(messages['validation.phoneNumberRequired'])),
  });

  const infoViewActionsContext = useInfoViewActionsContext();

  const [userImage, setUserImage] = useState(
    selectContact && selectContact.image
      ? selectContact.image
      : '/assets/images/placeholder.jpg'
  );
  useEffect(() => {
    setUserImage(
      selectContact && selectContact.image
        ? selectContact.image
        : '/assets/images/placeholder.jpg'
    );
  }, [selectContact]);

  return (
    <AppDialog
      fullHeight
      open={isAddContact}
      onClose={() => handleAddContactClose()}
    >
      <Formik
        validateOnChange={true}
        initialValues={{
          name: selectContact ? selectContact.name : '',
          email: selectContact ? selectContact.email : '',
          contact: selectContact ? selectContact.contact : '',
          birthday:
            selectContact && selectContact.birthday
              ? selectContact.birthday
              : null,
          website:
            selectContact && selectContact.website ? selectContact.website : '',
          company:
            selectContact && selectContact.company ? selectContact.company : '',
          address:
            selectContact && selectContact.address ? selectContact.address : '',
          facebookId:
            selectContact && selectContact.facebookId
              ? selectContact.facebookId
              : '',
          twitterId:
            selectContact && selectContact.twitterId
              ? selectContact.twitterId
              : '',
          notes:
            selectContact && selectContact.notes ? selectContact.notes : '',
          label:
            selectContact && selectContact.label ? selectContact.label : '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          if (selectContact) {
            const newContact = {
              id: selectContact.id,
              isStarred: selectContact.isStarred,
              isFrequent: selectContact.isFrequent,
              image: userImage,
              ...data,
            } as ContactObjType;
            putDataApi('/api/contactApp/contact/', infoViewActionsContext, {
              contact: newContact,
            })
              .then(() => {
                reCallAPI();
                infoViewActionsContext.showMessage(
                  'Contact updated successfully!'
                );
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
            onUpdateContact!(newContact);
          } else {
            const newContact = {
              id: Math.floor(Math.random() * 1000),
              isStarred: false,
              isFrequent: Math.random() > 0.5,
              image: userImage,
              ...data,
            };
            postDataApi('/api/contactApp/compose', infoViewActionsContext, {
              contact: newContact,
            })
              .then(() => {
                reCallAPI();
                infoViewActionsContext.showMessage(
                  'Contact created successfully!'
                );
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
          }
          handleAddContactClose();
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ values, setFieldValue }) => (
          <AddContactForm
            setUserImage={setUserImage}
            userImage={userImage}
            values={values as ContactObjType}
            setFieldValue={setFieldValue}
            handleAddContactClose={handleAddContactClose}
          />
        )}
      </Formik>
    </AppDialog>
  );
};

export default CreateContact;

CreateContact.defaultProps = {
  selectContact: null,
};

CreateContact.propTypes = {
  isAddContact: PropTypes.bool.isRequired,
  handleAddContactClose: PropTypes.func.isRequired,
  selectContact: PropTypes.object,
  onUpdateContact: PropTypes.func,
  reCallAPI: PropTypes.func,
};
