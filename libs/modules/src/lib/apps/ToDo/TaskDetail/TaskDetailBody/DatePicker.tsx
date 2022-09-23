import React from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import IntlMessages from '@sift/helpers/IntlMessages';
import moment from 'moment';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

type Props = {
  date: string;
  setDate: (date: string) => void;
};

const AppDatePicker = ({ date, setDate }: Props) => {
  return (
    <Box
      sx={{
        ml: { xs: 0, sm: 5 },
        mt: { xs: 2, sm: 0 },
      }}
    >
      <DatePicker
        label={<IntlMessages id="common.startDate" />}
        value={date}
        renderInput={(params) => <TextField {...params} />}
        onChange={(value) => setDate(moment(value).format('lll'))}
      />
    </Box>
  );
};

export default AppDatePicker;
