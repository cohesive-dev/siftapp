import React from 'react';
import DatePickerWrapper from './DatePickerWrapper';
import TextField from '@mui/material/TextField';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { TextFieldProps } from '@mui/material/TextField/TextField';

const DateSelector = () => {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <DatePickerWrapper>
      <StaticDatePicker
        orientation="landscape"
        openTo="day"
        value={value}
        onChange={(newValue:Date) => {
          setValue(newValue);
        }}
        renderInput={(params:TextFieldProps) => <TextField {...params} />}
      />
    </DatePickerWrapper>
  );
};

export default DateSelector;
