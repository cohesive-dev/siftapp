import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { orange } from '@mui/material/colors';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import IntlMessages from '@sift/helpers/IntlMessages';
import IconButton from '@mui/material/IconButton';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AppScrollbar from '@sift/components/AppScrollbar';
import AppList from '@sift/components/AppList';
import { MessageType } from '@sift/models/apps/Mail';

const CommentWrapper = styled('div')(
  (props: { isPreviousSender: boolean }) => ({
    display: 'flex',
    marginTop: props.isPreviousSender ? 1 : 16,
    '& .avatar': {
      display: props.isPreviousSender ? 'none' : 'visible',
    },
    '& .date': {
      display: props.isPreviousSender ? 'none' : 'visible',
    },
  })
);

const CommentItemWrapper = styled('div')(
  (props: { isPreviousSender: boolean }) => ({
    marginLeft: props.isPreviousSender ? 55 : 15,
  })
);

const CommentDateWrapper = styled('div')(({ theme }) => ({
  color: theme.palette.text.disabled,
  fontSize: 12,
  display: 'block',
  marginBottom: 6,
}));

const CommentTextWrapper = styled('p')(({ theme }) => ({
  display: 'inline-block',
  borderRadius: '0 10px 10px 0',
  padding: '6px 12px',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
  border: `@border-style-base @border-width-base ${theme.palette.divider}`,

  '.last-scrum-board-message &': {
    borderRadius: '0 10px 10px 10px',
  },
  '& p': {
    marginBottom: 0,
  },
}));

type Props = {
  comments: MessageType[];
  onAddNewComment: (data: string) => void;
};

const CardComments = (props: Props) => {
  const { comments, onAddNewComment } = props;
  const [comment, setComment] = useState('');

  const onAddComment = () => {
    onAddNewComment(comment);
    setComment('');
  };

  const { messages } = useIntl();
  return (
    <Box>
      <Box component="h4">
        <IntlMessages id="common.comments" />
      </Box>

      <Box
        sx={{
          mb: 5,
        }}
      >
        <AppScrollbar
          sx={{
            maxHeight: 200,
          }}
        >
          <AppList
            data={comments}
            renderRow={(item, index) => {
              const isPreviousSender =
                index > 0 && comments[index - 1].sender.id === item.sender.id;
              return (
                <CommentWrapper key={index} isPreviousSender={isPreviousSender}>
                  {item.sender.image ? (
                    <Avatar
                      src={item.sender.image}
                      className="avatar"
                      sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: orange[500],
                      }}
                    />
                  ) : (
                    <Avatar
                      className="avatar"
                      sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: orange[500],
                      }}
                    >
                      {item.sender.name.charAt(0).toUpperCase()}
                    </Avatar>
                  )}

                  <CommentItemWrapper isPreviousSender={isPreviousSender}>
                    <CommentDateWrapper className="date">
                      {item.date}
                    </CommentDateWrapper>
                    <CommentTextWrapper>{item.comment}</CommentTextWrapper>
                  </CommentItemWrapper>
                </CommentWrapper>
              );
            }}
          />
        </AppScrollbar>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TextField
          multiline
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{
            width: '100%',
          }}
          rows="1"
          variant="outlined"
          placeholder={messages['common.pressEnter'] as string}
        />
        <IconButton
          disabled={!comment}
          onClick={() => onAddComment()}
          sx={{
            ml: 2,
            '& svg': {
              pl: 1,
            },
          }}
          aria-label="send"
        >
          <SendOutlinedIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CardComments;

CardComments.defaultProps = {
  comments: [],
};

CardComments.propTypes = {
  comments: PropTypes.array,
  onAddNewComment: PropTypes.func,
};
