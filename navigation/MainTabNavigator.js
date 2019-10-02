import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Styles from '../assets/Styles';

import TabBarIcon from '../components/TabBarIcon';
import {
  Home, Profile, Stats, Workshop,
} from '../screens';

const HomeStack = createStackNavigator({ Home });

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="home"
      image={
        focused
          ? require('../assets/images/home-icon-active.png')
          : require('../assets/images/home-icon.png')
      }
      imageHeight={20}
    />
  ),
};

const WorkshopStack = createStackNavigator({ Workshop });

WorkshopStack.navigationOptions = {
  tabBarLabel: 'Workshop',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="workshop"
      image={
        focused
          ? require('../assets/images/workshop-icon-active.png')
          : require('../assets/images/workshop-icon.png')
      }
      imageHeight={20}
    />
  ),
};

const ProfileStack = createStackNavigator({ Profile });

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="profile"
      image={
        focused
          ? require('../assets/images/profile-icon-active.png')
          : require('../assets/images/profile-icon.png')
      }
      imageHeight={24}
    />
  ),
};

const StatsStack = createStackNavigator({ Stats });

StatsStack.navigationOptions = {
  tabBarLabel: 'Stats',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="stats"
      image={
        focused
          ? require('../assets/images/stats-icon-active.png')
          : require('../assets/images/stats-icon.png')
      }
      imageHeight={20}
    />
  ),
};

const TabScreens = createBottomTabNavigator(
  {
    HomeStack,
    WorkshopStack,
    StatsStack,
    ProfileStack,
  },
  {
    tabBarOptions: {
      activeTintColor: Styles.colours.highlight,
      inactiveTintColor: Styles.colours.darkestTransparency,
      labelStyle: {
        fontSize: 12,
        fontWeight: '600',
      },
      style: {
        backgroundColor: Styles.colours.backgroundLight,
        borderColor: Styles.colours.backgroundLight,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        marginBottom: Styles.layout.isIphoneX ? 0 : 10,
        elevation: 10, // android drop shadow
        shadowColor: Styles.colours.black,
        shadowOffset: { y: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      // headerMode: 'none'
    },
  },
);

export default TabScreens;
