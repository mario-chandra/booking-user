import { dateFormat } from '@/utils/dateTimeConfig';
import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';
import { DayPickerSingleDateController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const DatePicker = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs().add(1, 'day'));
  const [focused, setFocused] = React.useState();
  useEffect(() => {
    onChange(dayjs(selectedDate).format(dateFormat));
  }, [selectedDate]);

  const actionHandler = (res) => {
    console.log('res', res);
  };

  return (
    <DayPickerSingleDateController
      // keepOpenOnDateSelect
      // orientation="vertical"
      // autoFocus
      // withFullScreenPortal
      // numberOfMonths={1}

      hideKeyboardShortcutsPanel
      date={selectedDate}
      onDateChange={(date) => setSelectedDate(date)}
      focused={focused}
      onFocusChange={({ focused }) => setFocused(focused)}
      id="date"
      onOutsideClick={actionHandler}
      onPrevMonthClick={actionHandler}
      onNextMonthClick={actionHandler}
      numberOfMonths={1}
    />
  );
};
export default DatePicker;
