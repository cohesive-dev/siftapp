import React from 'react';
import { TextField } from '@mui/material';
import AppCard from '@sift/components/AppCard';
import CalendarWrapper from './CalendarWrapper';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

type DateSelectorProps = {};

const DateSelector: React.FC<DateSelectorProps> = () => {
  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <AppCard sxStyle={{ height: 1 }} contentStyle={{ padding: 0 }}>
      <CalendarWrapper>
        <StaticDatePicker
          orientation="landscape"
          openTo="day"
          value={value}
          onChange={(newValue: Date | null) => {
            setValue(newValue);
          }}
          renderInput={(params: any) => <TextField {...params} />}
        />
      </CalendarWrapper>
    </AppCard>
  );
};

export default DateSelector;
