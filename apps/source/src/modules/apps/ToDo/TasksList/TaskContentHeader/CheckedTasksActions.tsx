import React from 'react';
import IntlMessages from '@sift/helpers/IntlMessages';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import AppsDeleteIcon from '@sift/components/AppsDeleteIcon';
import { useRouter } from 'next/router';
import IconButton from '@mui/material/IconButton';
import AppTooltip from '@sift/components/AppTooltip';
import { StyledBox } from './index.style';
import { useInfoViewActionsContext } from '@sift/context/InfoViewContextProvider';
import { putDataApi } from '@sift/hooks/APIHooks';
import {
  useTodoActionsContext,
  useTodoContext,
} from '../../../context/TodoContextProvider';
import { TodoType } from '@sift/models/apps/Todo';
import { APIDataProps } from '@sift/models/APIDataProps';

type Props = {
  checkedTasks: number[];
  setCheckedTasks: (data: number[]) => void;
  onUpdateTasks: (tasks: TodoType[]) => void;
};
const CheckedTasksActions = ({
  checkedTasks,
  setCheckedTasks,
  onUpdateTasks,
}: Props) => {
  const { folder, labelList, label, page } = useTodoContext();
  const infoViewActionsContext = useInfoViewActionsContext();
  const { setTodoData } = useTodoActionsContext();

  const [isLabelOpen, onOpenLabel] = React.useState(null);

  const onLabelOpen = (event: any) => {
    onOpenLabel(event.currentTarget);
  };

  const onLabelClose = () => {
    onOpenLabel(null);
  };

  const onDeleteTasks = () => {
    putDataApi<APIDataProps<TodoType[]>>(
      '/api/todo/update/folder',
      infoViewActionsContext,
      {
        taskIds: checkedTasks,
        type: folder ? 'folder' : 'label',
        name: folder || label,
        page,
      }
    )
      .then((data) => {
        setTodoData(data);
        setCheckedTasks([]);
        infoViewActionsContext.showMessage('Task Deleted Successfully');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onSelectLabel = (event: any) => {
    const labelType = event.target.value;
    putDataApi<TodoType[]>('/api/todo/update/label', infoViewActionsContext, {
      taskIds: checkedTasks,
      type: +labelType,
    })
      .then((data) => {
        onUpdateTasks(data);
        setCheckedTasks([]);
        onLabelClose();
        infoViewActionsContext.showMessage('Task Updated Successfully');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <>
      <StyledBox component="span">
        <Box component="span">
          <AppsDeleteIcon
            deleteAction={onDeleteTasks}
            deleteTitle={<IntlMessages id="todo.deleteMessage" />}
            sx={{
              cursor: 'pointer',
              color: 'text.disabled',
            }}
          />
        </Box>

        <Box component="span">
          <AppTooltip title={<IntlMessages id="common.label" />}>
            <IconButton
              sx={{
                color: 'text.disabled',
              }}
              size="large"
              onClick={onLabelOpen}
            >
              <LabelOutlinedIcon
                sx={{
                  cursor: 'pointer',
                  color: 'text.disabled',
                  display: 'block',
                }}
              />
            </IconButton>
          </AppTooltip>
        </Box>
      </StyledBox>
      <Menu
        anchorEl={isLabelOpen}
        open={Boolean(isLabelOpen)}
        onClose={onLabelClose}
      >
        {labelList.map((label) => {
          return (
            <MenuItem
              key={label.id}
              sx={{ p: '8px !important' }}
              value={label.id}
              onClick={onSelectLabel}
            >
              {label.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default CheckedTasksActions;
