import { useLocation } from 'react-router-dom';
import { routeInfoList } from '../../utils/routes';

export const useLocationInfo = () => {
  const location = useLocation();
  const locationInfo = routeInfoList.find(
    (route) => route.path === location.pathname,
  );
  return locationInfo ?? routeInfoList[0];
};
