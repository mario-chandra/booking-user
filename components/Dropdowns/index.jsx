import React, { useState } from 'react';
import ChevronUp from '@/icons/Outline/Chevron Up.svg';
import ChevronDown from '@/icons/Outline/Chevron Down.svg';
import classNames from '@/helpers/classNames';

const Dropdowns = ({ Icon, placeholder, children, rounded = false }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleSelect = (item) => {
    setOpen(false);
    setSelected(item);
  };

  return (
    <div>
      <div className="w-full box-border relative h-[56px] max-w-[468px]">
        <button
          onClick={handleClick}
          // tabIndex="0"
          className={classNames(
            rounded ? 'rounded-full' : 'rounded-2',
            'flex w-full justify-between items-center px-4 py-4 bg-white border-2  h-full border-shade-BD'
          )}
        >
          {Icon && <Icon className="w-6" fill="#696E76" />}

          <p className=" ml-2 text-gray-700 text-sm">
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
            {/* {datas.map((item) => (
              <li
                className="hover:bg-gray-300 cursor-pointer py-4 px-6"
                onClick={() => handleSelect(item.title)}
                key={item.id}
              >
                <a>{item.title}</a>
              </li>
            ))} */}
            {children}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdowns;
