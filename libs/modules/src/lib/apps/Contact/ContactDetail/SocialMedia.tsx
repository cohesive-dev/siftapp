import React from 'react';
import Box from '@mui/material/Box';
import IntlMessages from '@sift/helpers/IntlMessages';
import { FiFacebook, FiTwitter } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { Fonts } from '@sift/constants/AppEnums';
import { ContactObjType } from '@sift/models/apps/Contact';

interface Props {
  contact: ContactObjType;
}
const SocialMedia = (props: Props) => {
  const { contact } = props;

  return (
    <Box
      sx={{
        pr: { xs: 5, lg: 8, xl: 10 },
        py: 5,
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        component="h6"
        sx={{
          mb: 2,
          fontWeight: Fonts.MEDIUM,
          fontSize: 16,
        }}
      >
        <IntlMessages id="common.socialMedia" />
      </Box>

      <Box
        sx={{
          px: { xs: 5, lg: 8, xl: 10 },
        }}
      >
        <Box
          sx={{
            mb: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            <FiFacebook />
          </Box>
          <Box
            sx={{
              ml: 2,
              color: 'text.secondary',
            }}
          >
            {contact.facebookId ? (
              contact.facebookId
            ) : (
              <IntlMessages id="common.na" />
            )}
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {' '}
          <Box
            sx={{
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            <FiTwitter />
          </Box>
          <Box
            sx={{
              ml: 2,
              color: 'text.secondary',
            }}
          >
            {contact.twitterId ? (
              contact.twitterId
            ) : (
              <IntlMessages id="common.na" />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialMedia;

SocialMedia.propTypes = {
  contact: PropTypes.object.isRequired,
};
