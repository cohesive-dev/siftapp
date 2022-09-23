import React from 'react';
import AppComponentHeader from '@sift/components/AppComponentHeader';
import AppGridContainer from '@sift/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@sift/components/AppComponentCard';

import BasicDateRangePicker from './BasicDateRangePicker';

import BasicDateRangePickerSource from 'raw-loader!./BasicDateRangePicker';
import StaticDateRangePickerDemo from './StaticDateRangePickerDemo';

import StaticDateRangePickerDemoSource from 'raw-loader!./StaticDateRangePickerDemo';
import ResponsiveDateRangePicker from './ResponsiveDateRangePicker';

import ResponsiveDateRangePickerSource from 'raw-loader!./ResponsiveDateRangePicker';
import FormPropsDateRangePickers from './FormPropsDateRangePickers';

import FormPropsDateRangePickersSource from 'raw-loader!./FormPropsDateRangePickers';
import CalendarsDateRangePicker from './CalendarsDateRangePicker';

import CalendarsDateRangePickerSource from 'raw-loader!./CalendarsDateRangePicker';
import MinMaxDateRangePicker from './MinMaxDateRangePicker';

import MinMaxDateRangePickerSource from 'raw-loader!./MinMaxDateRangePicker';
import CustomDateRangeInputs from './CustomDateRangeInputs';

import CustomDateRangeInputsSource from 'raw-loader!./CustomDateRangeInputs';

const DateRangePicker = () => {
  return (
    <>
      <AppComponentHeader
        title="Date Range Picker"
        description="Date pickers let the user select a range of dates."
        refUrl="https://mui.com/components/date-range-picker/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Basic usage"
            component={BasicDateRangePicker}
            source={BasicDateRangePickerSource}
            noScrollbar
            description="Note that you can pass almost any prop from DatePicker."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Disabling dates"
            component={MinMaxDateRangePicker}
            source={MinMaxDateRangePickerSource}
            noScrollbar
            description="Disabling dates behaves the same as the simple DatePicker."
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Responsiveness"
            component={ResponsiveDateRangePicker}
            source={ResponsiveDateRangePickerSource}
            noScrollbar
            description="The date range picker component is designed to be optimized for the device it runs on."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Form Props"
            component={FormPropsDateRangePickers}
            source={FormPropsDateRangePickersSource}
            noScrollbar
            description="The date range picker component can be disabled or read-only."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Different number of months"
            component={CalendarsDateRangePicker}
            source={CalendarsDateRangePickerSource}
            noScrollbar
            description="Note that the calendars prop only works in desktop mode."
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Custom input component"
            component={CustomDateRangeInputs}
            source={CustomDateRangeInputsSource}
            noScrollbar
            description="You can customize the rendered input with the renderInput prop. For DateRangePicker it takes 2 parameters – for start and end input respectively."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="Static mode"
            component={StaticDateRangePickerDemo}
            source={StaticDateRangePickerDemoSource}
            noScrollbar
            description="Its possible to render any picker inline. This will enable building custom popover/modal containers."
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default DateRangePicker;
