import { useCallback, useState } from 'react';
import { User } from '../../@types';
import { userModel } from './model';

export const useUserList = () => {
  const [userList, setUserList] = useState<User[]>([]);

  const getUserList = useCallback(async () => {
    const userListData = await userModel().getList('wordCount');
    setUserList(userListData);
  }, []);

  return [userList, getUserList] as const;
};
