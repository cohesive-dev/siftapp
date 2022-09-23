import React, {createRef, useEffect} from 'react';
import MailDetailHeader from './MailDetailHeader';
import MailDetailBody from './MailDetailBody';
import {useRouter} from "next/router";
import AppsContent from '@sift/components/AppsContent';
import AppsHeader from '@sift/components/AppsHeader';
import AppAnimate from '@sift/components/AppAnimate';
import {MailDetailSkeleton} from '@sift/components/MailDetailSkeleton';
import Box from '@mui/material/Box';
import {useGetDataApi} from '@sift/hooks/APIHooks';
import {MailType} from "@sift/models/apps/Mail";

const MailDetail = () => {
  const contentRef = createRef();
  const router = useRouter();
  const { all } = router.query;

  const [{ apiData: selectedMail }, { setQueryParams, setData }] =
    useGetDataApi<MailType>('/api/mailApp/mail/', undefined, {  }, false);

  useEffect(() => {
    setQueryParams({ id: all?.slice(-1)[0] });
  }, [all]);

  const onUpdateSelectedMail = (data:MailType) => {
    setData(data);
  };

  if (!selectedMail) {
    return <MailDetailSkeleton />;
  }

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      ref={contentRef}
    >
      <AppsHeader>
        <MailDetailHeader
          selectedMail={selectedMail}
          onUpdateSelectedMail={onUpdateSelectedMail}
        />
      </AppsHeader>
      <AppsContent isDetailView>
        <AppAnimate animatoin="transition.slideUpIn">
          <MailDetailBody
            selectedMail={selectedMail}
            key={'mail_detail'}
            onUpdateSelectedMail={onUpdateSelectedMail}
          />
        </AppAnimate>
      </AppsContent>
    </Box>
  );
};

export default MailDetail;
