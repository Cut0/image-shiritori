import { useLocation } from 'react-router-dom';
import { RouteInfoList } from '../../utils/routes';

export const useLocationInfo = () => {
  const location = useLocation();
  const locationInfo = RouteInfoList.find(
    (route) => route.path === location.pathname,
  );
  return locationInfo ?? RouteInfoList[0];
};
