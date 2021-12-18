import { FC } from 'react';
import { GameIcon, ConfigIcon, CrownIcon, BookIcon } from '../../icons';
import { BookPage, GamePage, RankingPage, SettingPage } from '../../pages';

type RouteInfo = {
  name: string;
  path: string;
  icon: FC;
  page: FC;
};

const routeInfoList: RouteInfo[] = [
  { name: 'Game', path: '/', icon: GameIcon, page: GamePage },
  { name: 'Ranking', path: '/ranking', icon: CrownIcon, page: RankingPage },
  { name: 'Book', path: '/book', icon: BookIcon, page: BookPage },
  { name: 'Setting', path: '/setting', icon: ConfigIcon, page: SettingPage },
];

export { routeInfoList };
