import React from 'react';
import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

const NavStack = createStackNavigator({
  Main: MainTabNavigator,
});
const App = createAppContainer(NavStack);

export default App;
