import { dateFormat } from '@/utils/dateTimeConfig';
import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';
import { DayPickerSingleDateController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// const disabledDate = () => {
//   if (new Date().getHours() >= 15)
//     return [{ from: new Date(2000, 1, 1), to: add(new Date(), { days: 1 }) }];
//   return [
//     {
//       from: new Date(2000, 1, 1),
//       to: new Date(),
//     },
//   ];
// };

const DatePicker = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs().add(1, 'day'));
  const [focused, setFocused] = React.useState();
  useEffect(() => {
    onChange(dayjs(selectedDate).format(dateFormat));
  }, [selectedDate]);

  console.log('abc', dayjs().format('HH'));

  const disabledDate = () => {
    const NOW = dayjs().format('HH');

    return dayjs().add(1, 'days');
  };

  // console.log('date', dayjs(selectedDate).format(dateFormat));

  return (
    <DayPickerSingleDateController
      // keepOpenOnDateSelect
      // orientation="vertical"
      // autoFocus
      // withFullScreenPortal
      // numberOfMonths={1}

      // hideKeyboardShortcutsPanel
      date={selectedDate}
      onDateChange={(date) => setSelectedDate(date)}
      focused={focused}
      onFocusChange={({ focused }) => setFocused(focused)}
      id="date"
      // isDayBlocked={disabledDate}
      // numberOfMonths={1}
      // minDate={disabledDate }}
    />
  );
};
export default DatePicker;
