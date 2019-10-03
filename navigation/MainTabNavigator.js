/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Styles from '../assets/Styles'
import TabBarIcon from '../components/TabBarIcon'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Stats from '../screens/Stats'
import Workshop from '../screens/Workshop'

const ACTIVE_HOME = require('../assets/images/home-icon-active.png')
const INACTIVE_HOME = require('../assets/images/home-icon.png')
const ACTIVE_WORKSHOP = require('../assets/images/workshop-icon-active.png')
const INACTIVE_WORKSHOP = require('../assets/images/workshop-icon.png')
const ACTIVE_PROFILE = require('../assets/images/profile-icon-active.png')
const INACTIVE_PROFILE = require('../assets/images/profile-icon.png')
const ACTIVE_STATS = require('../assets/images/stats-icon-active.png')
const INACTIVE_STATS = require('../assets/images/stats-icon.png')

const HomeStack = createStackNavigator({ Home })
const ProfileStack = createStackNavigator({ Profile })
const StatsStack = createStackNavigator({ Stats })
const WorkshopStack = createStackNavigator({ Workshop })

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="home"
      image={focused ? ACTIVE_HOME : INACTIVE_HOME}
      imageHeight={20}
    />
  )
}

WorkshopStack.navigationOptions = {
  tabBarLabel: 'Workshop',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="workshop"
      image={focused ? ACTIVE_WORKSHOP : INACTIVE_WORKSHOP}
      imageHeight={20}
    />
  )
}

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="profile"
      image={focused ? ACTIVE_PROFILE : INACTIVE_PROFILE}
      imageHeight={24}
    />
  )
}

StatsStack.navigationOptions = {
  tabBarLabel: 'Stats',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="stats"
      image={focused ? ACTIVE_STATS : INACTIVE_STATS}
      imageHeight={20}
    />
  )
}

const TabScreens = createBottomTabNavigator(
  {
    HomeStack,
    WorkshopStack,
    StatsStack,
    ProfileStack
  },
  {
    tabBarOptions: {
      activeTintColor: Styles.colours.highlight,
      inactiveTintColor: Styles.colours.darkestTransparency,
      labelStyle: {
        fontSize: 12,
        fontWeight: '600'
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
        shadowRadius: 10
      }
      // headerMode: 'none'
    }
  }
)

export default TabScreens
