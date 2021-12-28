import { useLocation, matchPath } from 'react-router-dom';
import { routeInfoList } from './utils';

export const useLocationInfo = () => {
  const location = useLocation();
  const locationInfo = routeInfoList.find((route) =>
    matchPath(route.path, location.pathname),
  );
  return locationInfo!;
};
