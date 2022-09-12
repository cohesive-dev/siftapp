import React, { useState } from 'react';
import { useRouter } from 'next/router';
import IntlMessages from '@sift/helpers/IntlMessages';
import Box from '@mui/material/Box';
import AppGridContainer from '@sift/components/AppGridContainer';
import { Fonts } from '@sift/constants/AppEnums';
import AppInfoView from '@sift/components/AppInfoView';
import { Zoom } from '@mui/material';
import { useInfoViewActionsContext } from '@sift/context/InfoViewContextProvider';
import { postDataApi, putDataApi } from '@sift/hooks/APIHooks';
import {
  AddBoardButton,
  AddNewBoard,
  BoardItem,
} from '@sift/modules/apps/ScrumBoard';
import {
  useScrumActionsContext,
  useScrumContext,
} from '../../context/ScrumContextProvider';
import { BoardType } from '@sift/models/apps/ScrumbBoard';

const BoardList = () => {
  const router = useRouter();
  const { boardList } = useScrumContext();
  const { setData } = useScrumActionsContext();

  const infoViewActionsContext = useInfoViewActionsContext();

  const [isAddBoardOpen, setAddBoardOpen] = useState(false);

  const [selectedBoard, setSelectedBoard] = useState<BoardType | null>(null);

  const onCloseAddBoardModal = () => {
    setAddBoardOpen(false);
  };

  const onAddButtonClick = () => {
    setSelectedBoard(null);
    setAddBoardOpen(true);
  };

  const onEditButtonClick = (board: BoardType) => {
    setSelectedBoard(board);
    setAddBoardOpen(true);
  };

  const onAddBoard = (name: string) => {
    if (selectedBoard) {
      const board = { ...selectedBoard, name };
      putDataApi('/api/scrumboard/edit/board', infoViewActionsContext, {
        board,
      })
        .then(() => {
          infoViewActionsContext.showMessage('Board Edited Successfully!');
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    } else {
      postDataApi<BoardType[]>(
        '/api/scrumboard/add/board',
        infoViewActionsContext,
        {
          board: { name },
        }
      )
        .then((data) => {
          setData(data);
          infoViewActionsContext.showMessage('Board Added Successfully!');
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    }
  };

  const onViewBoardDetail = (board: BoardType) => {
    router.push(`/apps/scrum-board/${board.id}`);
  };

  return (
    <>
      <Zoom in mountOnEnter unmountOnExit>
        <Box
          sx={{
            pt: 4,
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
          }}
        >
          <Box
            component="h2"
            sx={{
              my: { xs: 5, sm: 5, xl: 8 },
              color: 'text.primary',
              fontWeight: Fonts.BOLD,
              textAlign: 'center',
              fontSize: 16,
            }}
          >
            <IntlMessages id="scrumboard.scrumboardApp" />
          </Box>
          <AppGridContainer
            sx={{
              justifyContent: 'center',
            }}
          >
            {boardList && boardList.length > 0
              ? boardList.map((board) => {
                  return (
                    <BoardItem
                      key={board.id}
                      board={board}
                      onEditButtonClick={onEditButtonClick}
                      onViewBoardDetail={onViewBoardDetail}
                    />
                  );
                })
              : null}
            <AddBoardButton onAddButtonClick={onAddButtonClick} />
          </AppGridContainer>
        </Box>
      </Zoom>

      {isAddBoardOpen ? (
        <AddNewBoard
          isAddBoardOpen={isAddBoardOpen}
          onCloseAddBoardModal={onCloseAddBoardModal}
          onAddBoard={onAddBoard}
          selectedBoard={selectedBoard}
        />
      ) : null}
      <AppInfoView />
    </>
  );
};

export default BoardList;
