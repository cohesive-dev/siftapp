import React from 'react';
import BoardDetail from './BoardDetail';
import BoardList from './BoardList';
import { useRouter } from 'next/router';
import ScrumContextProvider from '../context/ScrumContextProvider';

const ScrumBoard = () => {
  const router = useRouter();
  const { id } = router.query;

  const onGetMainComponent = () => {
    if (id) {
      return <BoardDetail />;
    } else {
      return <BoardList />;
    }
  };

  return <ScrumContextProvider>{onGetMainComponent()}</ScrumContextProvider>;
};

export default ScrumBoard;
