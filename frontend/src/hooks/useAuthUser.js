import { useQuery } from '@tanstack/react-query';
import { getAuthUser } from '../lib/api';
import React from 'react'

const useAuthUser = () => {
  // tanstack query
  const authUser = useQuery({
    queryKey: ["authUser"],

    queryFn: getAuthUser,
    retry: false, // auth check is just once cause it is authentication
  });

    return { isLoading: authUser.isLoading, authUser: authUser.data?.user };
}

export default useAuthUser
