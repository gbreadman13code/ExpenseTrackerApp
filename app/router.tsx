import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabRoutes } from '@app/screens/types';
import { renderTabBarIcons, renderTabBarLabel } from '@app/utils/navigation.utils';
import { AddExpense, Home, Settings, Statistics } from '@app/screens';

const Router = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={TabRoutes.Home}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return renderTabBarIcons({ focused, color, size: 20, routerName: route.name });
        },
        tabBarLabel: renderTabBarLabel(route.name),
        headerShown: false,
      })}
    >
      <Tab.Screen name={TabRoutes.Home} component={Home} />
      <Tab.Screen name={TabRoutes.AddExpense} component={AddExpense} />
      <Tab.Screen name={TabRoutes.Statistics} component={Statistics} />
      <Tab.Screen name={TabRoutes.Settings} component={Settings} />
    </Tab.Navigator>
  );
};

export default Router;
