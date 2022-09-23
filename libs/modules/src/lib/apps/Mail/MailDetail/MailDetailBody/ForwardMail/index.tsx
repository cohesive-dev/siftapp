import React, { useState } from 'react';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import IntlMessages from '@sift/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import { Box } from '@mui/material';
import moment from 'moment';
import { useAuthUser } from '@sift/hooks/AuthHooks';
import AppTextField from '@sift/components/AppTextField';
import ReactQuill from 'react-quill';
import { Fonts } from '@sift/constants/AppEnums';

import { styled } from '@mui/material/styles';
import { MessageType } from '@sift/models/apps/Mail';
import { generateUniqueID } from '@sift/helpers';

const ReactQuillWrapper = styled(ReactQuill)(() => {
  return {
    '& .ql-toolbar': {
      borderRadius: '8px 8px 0 0',
    },
    '& .ql-container': {
      borderRadius: '0 0 8px 8px',
      minHeight: 150,
      maxHeight: 200,
    },
  };
});

interface Props {
  onSubmitForwardedMail: (mail: MessageType) => void;
  selectedMail: MessageType;
}

const ForwardMail = ({ onSubmitForwardedMail }: Props) => {
  const [isShowCC, onShowCC] = useState(false);

  const onShowCcInput = () => {
    onShowCC(true);
  };

  const { user } = useAuthUser();

  const { messages } = useIntl();
  const validationSchema = yup.object({
    to: yup
      .string()
      .email(String(messages['validation.emailFormat']))
      .required(String(messages['validation.emailRequired'])),
    cc: yup.string().email(String(messages['validation.emailFormat'])),
  });

  return (
    <Box
      sx={{
        border: 1,
        borderColor: 'grey.300',
        borderRadius: 2,
        ml: { md: 12.5 },
        mt: 4,
        mb: 3,
        p: 5,
      }}
    >
      <Formik
        validateOnChange={true}
        initialValues={{
          to: '',
          cc: '',
          content: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          console.log('data: ', data);
          setSubmitting(true);
          const mail = {
            messageId: Math.floor(Math.random()) * 1000,
            sender: {
              id: generateUniqueID(),
              name: user.displayName ? user.displayName : user.username,
              email: user.email,
              profilePic: '',
            },
            to: [
              {
                id: generateUniqueID(),
                name: data.to ? data.to : user.username,
                email: data.to,
                profilePic: '',
              },
            ],
            cc: [],
            bcc: [],
            description: data.content ? data.content : 'No Message',
            isStarred: false,
            sentOn: moment().format('llll'),
          } as MessageType;
          onSubmitForwardedMail(mail);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 4,
              }}
            >
              <AppTextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{
                        fontWeight: Fonts.MEDIUM,
                      }}
                    >
                      <IntlMessages id="common.to" />
                    </InputAdornment>
                  ),
                }}
                name="to"
              />

              <Box
                component="span"
                sx={{
                  ml: 4,
                  cursor: 'pointer',
                }}
                onClick={onShowCcInput}
              >
                <IntlMessages id="common.cc" />
              </Box>
            </Box>

            {isShowCC ? (
              <Box
                sx={{
                  mb: 4,
                }}
              >
                <AppTextField
                  placeholder={messages['common.cc'] as string}
                  fullWidth
                  name="cc"
                />
              </Box>
            ) : null}

            <Box
              sx={{
                mb: 4,
              }}
            >
              <ReactQuillWrapper
                placeholder={messages['common.writeContent'] as string}
                onChange={(value) => setFieldValue('content', value)}
              />
            </Box>

            <div style={{ textAlign: 'right' }}>
              <Button type="submit" color="primary" variant="outlined">
                <IntlMessages id="common.send" />
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ForwardMail;
