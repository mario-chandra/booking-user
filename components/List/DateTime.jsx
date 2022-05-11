import TimeIcon from '@/icons/Outline/Time.svg';
import CalendarIcon from '@/icons/Outline/Calendar.svg';

const DateTime = ({ date, time }) => {
  return (
    <div className="flex mt-[10px] space-x-4">
      <div className="flex items-center space-x-2">
        <span>
          <TimeIcon className="w-6 h-6" />
        </span>
        <p className="text-md-4 first-letter:capitalize text-gray-600">
          {time}
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <span>
          <CalendarIcon className="w-6 h-6" />
        </span>
        <p className="text-md-4 first-letter:capitalize text-gray-600">
          {date}
        </p>
      </div>
    </div>
  );
};
export default DateTime;
