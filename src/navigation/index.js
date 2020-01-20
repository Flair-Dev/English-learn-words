/**
 * @format
 * @flow
 */

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from "../screens/Home";
import LearnPage from "../screens/LearnPage";

const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    LearnPage: {
      screen: LearnPage
    }
  },
  {
    headerMode: 'none',
  },
);

const AppNavigator = createSwitchNavigator({
  'App': AppStack,
},
{
  initialRouteName: 'App'
}
);

export default createAppContainer(AppNavigator);
