import { TabRoutes } from '@app/screens/types';
import { Icon } from 'react-native-paper';

type Props = {
  focused: boolean;
  color: string;
  size: number;
  routerName: string;
};

export const renderTabBarIcons = ({ focused, color, size, routerName }: Props) => {
  let iconName;

  switch (routerName) {
    case TabRoutes.Home:
      iconName = focused ? 'home' : 'home-outline';
      break;
    case TabRoutes.Statistics:
      iconName = focused ? 'information' : 'information-outline';
      break;
    case TabRoutes.AddExpense:
      iconName = focused ? 'plus-box-multiple' : 'plus-box-multiple-outline';
      break;
    case TabRoutes.Settings:
      iconName = focused ? 'account' : 'account-outline';
      break;
    default:
      return;
  }

  return <Icon source={iconName} color="blue" size={size} />;
};

export const renderTabBarLabel = (routerName: string): string => {
  switch (routerName) {
    case TabRoutes.Home:
      return 'Главная';
    case TabRoutes.Statistics:
      return 'Статистика';
    case TabRoutes.AddExpense:
      return 'Добавить расход';
    case TabRoutes.Settings:
      return 'Аккаунт';
    default:
      return '';
  }
};
