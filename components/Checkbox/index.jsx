import classNames from '@/helpers/classNames';
import { CheckIcon } from '@heroicons/react/solid';

const Checkbox = ({ title, isChecked, onClick, isDisabled }) => {
  return (
    <div
      className={classNames(
        isDisabled && 'disabled-checkbox',
        isChecked ? 'checked-input' : 'unchecked-input',
        'flex relative items-center p-3'
      )}
    >
      <input
        disabled={isDisabled}
        checked={isChecked}
        className="absolute opacity-0 w-6 h-6 border rounded-sm focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left"
        type="checkbox"
        // value=""
        id="flexCheckDefault"
        onClick={onClick}
      />
      <div
        className={classNames(
          isDisabled && 'disabled-checkbox',
          isChecked ? 'checked-input' : 'unchecked-input',
          'checkbox rounded-1 border-2 rounded-md  w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2'
        )}
      >
        <CheckIcon className="icon hidden fill-current  w-4 h-4 text-info-600 pointer-events-none " />
      </div>
      <label
        className={classNames(
          isDisabled ? 'text-gray-300' : 'text-gray-700',
          'form-check-label text-md-3 font-medium text-center inline-block'
        )}
        for="flexCheckDefault"
      >
        {title}
      </label>
    </div>
  );
};

export default Checkbox;
