import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

import { useAuth } from '@/context/AuthenticationContext';
import Logout from '../components/Icons/Logout';
import HamburgerMenu from '../components/Icons/HamburgerMenu';
import User from '../components/Icons/User';
import { useRouter } from 'next/router';

const menu = [
  {
    name: 'Profile',
    path: '/profile',
  },
  {
    name: 'My Seat',
    path: '/my-seat',
  },
  {
    name: 'History',
    path: '/history',
  },
  {
    name: 'Logout',
    icon: Logout,
  },
];

const LoggedButton = () => {
  const router = useRouter();
  const { logout } = useAuth();

  const handleDirectPage = (action, path) => {
    if (action === 'Logout') {
      logout();
      return;
    }
    return router.push(path);
  };

  return (
    <div className="relative">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-opacity-75`}
            >
              <div className="flex flex-row space-x-3 rounded-full justify-between w-fit bg-shade-FG px-8 py-2.5 border border-black-10 hover:bg-black-20">
                <HamburgerMenu />
                <User />
              </div>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute max-w-sm px-4 mt-3 transform -translate-x-1/2 left-0 min-w-max w-80 sm:px-0 md:max-w-3xl">
                <div className="overflow-hidden rounded-2 shadow-lg ring-1 ring-shade-FG">
                  <div className="relative flex flex-col divide-y divide-black-10 bg-shade-FG">
                    {menu.map((item) => (
                      <a
                        key={item.name}
                        onClick={() => handleDirectPage(item.name, item.path)}
                        className="flex items-center py-4 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex flex-row justify-between mx-4 w-full">
                          <p className="text-sm font-medium text-gray-500">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                          {item.icon && (
                            <item.icon aria-hidden="true" fill="#AFB7C4" />
                          )}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default LoggedButton;
