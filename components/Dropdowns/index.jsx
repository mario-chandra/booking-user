import React, { useState } from 'react';
import ChevronUp from '@/icons/Outline/Chevron Up.svg';
import ChevronDown from '@/icons/Outline/Chevron Down.svg';
import useGetQuery from '@/hooks/useGetQuery';
import classNames from '@/helpers/classNames';

const Dropdowns = ({ path, itemId, placeholder }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleSelect = (item) => {
    setOpen(false);
    setSelected(item);
  };

  const { data, isFetching } = useGetQuery('asdf', path, {
    onSuccess: () => {},
    onError: () => {},
    enabled: open,
  });

  return (
    <div>
      <div className="box-border relative h-[56px] w-[468px]">
        <button
          onClick={handleClick}
          // tabIndex="0"
          className={
            'rounded-full flex w-full justify-between items-center px-4 py-4 border h-full bg-shade-FG border-shade-BD'
          }
        >
          <p
            className={classNames(
              selected ? 'text-gray-700' : 'text-shade-BD',
              'ml-2 text-sm'
            )}
          >
            {selected ? selected : placeholder}
          </p>
          <div className=" flex justify-center">
            {open ? (
              <ChevronDown width={20} height={20} />
            ) : (
              <ChevronUp width={20} height={20} />
            )}
          </div>
        </button>
        {open && (
          <ul
            // tabIndex="0"
            className="absolute z-40 shadow-md w-full overflow-hidden mt-2 menu text-gray-700 bg-shade-FG rounded-3 "
          >
            {isFetching ? (
              <h1 className="text-gray-800">Loading</h1>
            ) : (
              data.map((item) => (
                <li
                  className="hover:bg-gray-300 cursor-pointer py-4 px-6"
                  onClick={() => handleSelect(item[itemId])}
                  key={item[itemId]}
                >
                  <a>{item[itemId]}</a>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdowns;
