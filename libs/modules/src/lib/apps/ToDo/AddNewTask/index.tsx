import React, {useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {SlotInfo} from 'react-big-calendar';
import moment from 'moment';
import IntlMessages from '@sift/helpers/IntlMessages';
import AddTaskForm from './AddTaskForm';
import AppDialog from '@sift/components/AppDialog';
import {useAuthUser} from '@sift/hooks/AuthHooks';
import {postDataApi} from '@sift/hooks/APIHooks';
import {useInfoViewActionsContext} from '@sift/context/InfoViewContextProvider';

import {useIntl} from 'react-intl';

type Props = {
  isAddTaskOpen: boolean;
  onCloseAddTask: () => void;
  reCallAPI?: () => void;
  selectedDate?: SlotInfo;
};

const AddNewTask = ({
  isAddTaskOpen,
  onCloseAddTask,
  selectedDate,
  reCallAPI,
}: Props) => {
  const { messages } = useIntl();
  const validationSchema = yup.object({
    title: yup.string().required(String(messages['validation.titleRequired'])),
  });

  const { user } = useAuthUser();
  const infoViewActionsContext = useInfoViewActionsContext();
  const [taskLabels, setTaskLabels] = useState([]);

  return (
    <AppDialog
      dividers
      maxWidth="md"
      open={isAddTaskOpen}
      onClose={() => onCloseAddTask()}
      title={<IntlMessages id="todo.addNewTask" />}
    >
      <Formik
        validateOnChange={true}
        initialValues={{
          title: '',
          assignedTo: '',
          label: [],
          priority: 3,
          date: selectedDate
            ? moment(selectedDate).format('MM/DD/YYYY')
            : moment().format('MM/DD/YYYY'),
          content: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          const newTask = {
            id: Math.floor(Math.random() * 1000000),
            isStarred: false,
            isAttachment: false,
            isRead: true,
            folderValue: 120,
            createdBy: {
              name: user.displayName ? user.displayName : 'User',
              image: user.photoURL,
            },
            startDate: moment(data.date).format('lll'),
            image: '/assets/images/dummy2.jpg',
            createdOn: moment().format('ll'),
            status: 1,
            comments: [],
            ...data,
            label: taskLabels,
          };
          console.log('newTask:***********', newTask);
          postDataApi('/api/todoApp/compose', infoViewActionsContext, {
            task: newTask,
          })
            .then(() => {
              if (reCallAPI) reCallAPI();
              infoViewActionsContext.showMessage(
                'New Task has been created successfully!'
              );
            })
            .catch((error) => {
              infoViewActionsContext.fetchError(error.message);
            });

          onCloseAddTask();
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <AddTaskForm
            isSubmitting={isSubmitting}
            values={values}
            setFieldValue={setFieldValue}
            setTaskLabels={setTaskLabels}
            taskLabels={taskLabels}
          />
        )}
      </Formik>
    </AppDialog>
  );
};

export default AddNewTask;
