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
  showInFooter: boolean;
};

const routeInfoList: RouteInfo[] = [
  {
    name: 'Game',
    path: '/',
    icon: GameIcon,
    page: GamePage,
    showInFooter: true,
  },
  {
    name: 'Ranking',
    path: '/ranking',
    icon: CrownIcon,
    page: RankingPage,
    showInFooter: true,
  },
  {
    name: 'Book',
    path: '/book',
    icon: BookIcon,
    page: BookPage,
    showInFooter: true,
  },
  {
    name: 'Setting',
    path: '/setting',
    icon: ConfigIcon,
    page: SettingPage,
    showInFooter: true,
  },
  {
    name: 'UserBook',
    path: '/users/:id',
    icon: BookIcon,
    page: UserBookPage,
    showInFooter: false,
  },
];

export { routeInfoList };
