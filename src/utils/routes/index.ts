import { FC } from 'react';
import { GameIcon, ConfigIcon, CrownIcon, BookIcon } from '../../icons';

type RouteType = {
  name: string;
  path: string;
  icon: FC;
};

const RouteInfoList: RouteType[] = [
  { name: 'Home', path: '/', icon: GameIcon },
  { name: 'Ranking', path: '/ranking', icon: CrownIcon },
  { name: 'Book', path: '/book', icon: BookIcon },
  { name: 'Setting', path: '/setting', icon: ConfigIcon },
];

export { RouteInfoList };
