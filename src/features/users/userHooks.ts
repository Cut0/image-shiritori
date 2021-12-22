import { useCallback, useState } from 'react';
import { User } from '../../@types';
import { userModel } from './model';

export const useUser = () => {
  const [user, setUser] = useState<undefined | User>(undefined);

  const getUser = useCallback(async (id: string) => {
    const userData = await userModel().get(id);
    setUser(userData);
  }, []);

  return [user, getUser] as const;
};
