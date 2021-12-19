import { FC } from 'react';
import { useSubscribeAuthStateChanged } from '../../features/auth/authHooks';
export const AppContainer: FC<{}> = ({ children }) => {
  useSubscribeAuthStateChanged();
  return <>{children}</>;
};
