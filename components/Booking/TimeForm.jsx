import useGetQuery from '@/hooks/useGetQuery';
import { LoadingModal } from '../Loading';
import { useState, useEffect } from 'react';
import useBookTime from '@/hooks/useBookTime';
import times from '@/_mocks/times';

const { default: Checkbox } = require('../Checkbox');

const TimeForm = ({ onChange }) => {
  const { selected, handleSelect } = useBookTime();
  const { data, isFetching } = useGetQuery(
    ['booking', 'time', 'list'],
    '/location/default/time?id_location=1'
  );

  console.log('selected', selected);

  useEffect(() => {
    if (selected.length !== 0) {
      const splitDate = selected[0].split(' - ');
      // const data=
      onChange({ start_time: splitDate[0], end_time: splitDate[1] });
    }
  }, [selected]);

  if (isFetching) return <LoadingModal />;

  return (
    <div class="w-full grid grid-rows-6 grid-cols-time-chip grid-flow-col gap-5 ">
      {times.map((item) => {
        const isItemSelected = selected.indexOf(item.time) !== -1;

        return (
          <Checkbox
            isChecked={isItemSelected}
            title={item.time}
            onClick={(event) => handleSelect(event, item.time)}
          />
        );
      })}
    </div>
  );
};

export default TimeForm;
