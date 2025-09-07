import React from 'react';
import useAuthUser from '../hooks/useAuthUser';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { logout } from '../lib/api';
import { BellIcon, LogOutIcon, ShipWheelIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import useLogout from '../hooks/useLogout';

import ThemeSelector from './ThemeSelector';

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation(); // Fixed typo: was 'locaiton'
  const isChatPage = location.pathname?.startsWith('/chat');

  // const queryClient = useQueryClient();

  // const { mutate: logoutMutation } = useMutation({
  //   mutationFn: logout,
  //   onSuccess: () => queryClient.invalidateQueries({queryKey: ["authUser"]})
  // })

  const { logoutMutation } = useLogout();

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {' '}
        {/* Fixed typo: was 'containter' */}
        <div className="flex items-center justify-end w-full">
          {' '}
          {/* Changed from justify-end to justify-between */}
          {/* LOGO - ONLY IN THE CHAT PAGE */}
          <div className="flex items-center">
            {' '}
            {/* Wrapper for logo */}
            {isChatPage && (
              <Link to="/" className="flex items-center gap-2.5">
                <ShipWheelIcon className="size-9 text-primary" />
                <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                  {' '}
                  {/* Fixed typo: was 'fort-bold' */}
                  Streamify
                </span>
              </Link>
            )}
          </div>
          {/* RIGHT SIDE ITEMS */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <Link to={'/notifications'}>
              <button className="btn btn-ghost btn-circle">
                <BellIcon className="h-6 w-6 text-base-content opacity-70" />
              </button>
            </Link>
          </div>
          <ThemeSelector />
          <div className="avatar">
            <div className="size-9 rounded-full">
              <img
                src={authUser?.profilePic}
                alt="User Avatar"
                rel="noreferrer"
              />
            </div>
          </div>
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => logoutMutation()}
          >
            <LogOutIcon className="h-6 w-6 text-base-content opacity-70" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
