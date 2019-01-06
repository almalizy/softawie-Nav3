import React from 'react';
import { createAppContainer, createSwitchNavigator,createDrawerNavigator,createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import MainScreen from '../Slids/MainScreen'
import LoginScreen from '../screens/AuthScreens/MyLoginScreen';



const LoginStack = createStackNavigator({
  Login: LoginScreen,
});

LoginStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


export default createAppContainer(createDrawerNavigator({
  MainS:MainScreen ,
  Main: MainTabNavigator,
  Login:LoginStack,
 
  
}));