import { useCallback } from 'react';
import { userModel } from './model';

export const useDeleteUser = () => {
  const deleteUser = useCallback(async (id: string) => {
    return await userModel().deleteUser(id);
  }, []);

  return [deleteUser] as const;
};
