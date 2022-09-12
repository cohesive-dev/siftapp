import React from 'react';
import MailsList from './MailsList';
import MailDetail from './MailDetail';
import AppsContainer from '@sift/components/AppsContainer';
import MailSidebar from './MailSideBar';
import {useIntl} from 'react-intl';
import {useRouter} from 'next/router';
import clsx from 'clsx';
import {MailDetailViewWrapper} from './index.styled';
import MailContextProvider from '../context/MailContextProvider';

const Mail = () => {
  const { query } = useRouter();
  const { messages } = useIntl();
  const id = parseInt(query.all[query.all.length - 1]) || 0;

  return (
    <MailContextProvider>
      <AppsContainer
        title={messages['mailApp.mail'] as string}
        sidebarContent={<MailSidebar />}
      >
        {id > 0 ? (
          <MailDetailViewWrapper
            className={clsx({
              show: id > 0,
            })}
          >
            <MailDetail />
          </MailDetailViewWrapper>
        ) : (
          <MailsList />
        )}
      </AppsContainer>
    </MailContextProvider>
  );
};

export default Mail;

Mail.defaultProps = {};
