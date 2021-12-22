import { FC } from 'react';
import { GameIcon, ConfigIcon, CrownIcon, BookIcon } from '../../icons';
import {
  BookPage,
  GamePage,
  RankingPage,
  SettingPage,
  UserBookPage,
} from '../../pages';

type RouteInfo = {
  name: string;
  path: string;
  icon: FC;
  page: FC;
  showFooter: boolean;
};

const routeInfoList: RouteInfo[] = [
  { name: 'Game', path: '/', icon: GameIcon, page: GamePage, showFooter: true },
  {
    name: 'Ranking',
    path: '/ranking',
    icon: CrownIcon,
    page: RankingPage,
    showFooter: true,
  },
  {
    name: 'Book',
    path: '/book',
    icon: BookIcon,
    page: BookPage,
    showFooter: true,
  },
  {
    name: 'Setting',
    path: '/setting',
    icon: ConfigIcon,
    page: SettingPage,
    showFooter: true,
  },
  {
    name: 'Book',
    path: '/users/:id',
    icon: BookIcon,
    page: UserBookPage,
    showFooter: false,
  },
];

export { routeInfoList };
