import DateTime from './DateTime';
import Note from './Note';
import Status from './Status';

const Field = ({
  label,
  value,
  status,
  dateTime = { date: '03 Jan 2022', time: '10.00 - 11.00' },
  note = {
    acceptBy: 'Admin 1',
    note: 'Sorry, the reservation at Aryaduta Lounge has been canceled because it has reached the maximum limit',
  },
}) => {
  return (
    <div className="flex flex-col w-1/2 border-b pb-[23px] mb-8 border-black-10">
      <div className="flex flex-1 justify-between items-end mb-6">
        <div className="flex flex-col">
          <p className="text-md-4 first-letter:capitalize mb-[14px] text-gray-600">
            {label}
          </p>
          <h4 className="text-lg-3 font-medium text-gray-800 ">{value}</h4>
          {dateTime && <DateTime date={dateTime.date} time={dateTime.time} />}
        </div>
        {status && <Status status="decline" />}
      </div>

      {note && <Note acceptBy={note.acceptBy} note={note.note} />}
    </div>
  );
};

export default Field;
