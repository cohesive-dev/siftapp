import * as React from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function JalaliDatePicker() {
  const [value, setValue] = React.useState<Date | null>(new Date(2022, 3, 7));

  return (
      <DatePicker
        mask="____/__/__"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
      />
  );
}
