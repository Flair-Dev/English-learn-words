/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';

import React from 'react';
import {
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import {configureStore} from './src/redux/store';
import actions from './src/redux/actions';
import AppNavigator  from './src/navigation'
import  NavigationService  from './src/services/Navigation'




export const store = configureStore(() => {
  store.dispatch(actions.appLoaded());
});

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator
        ref={navigatorRef => {
          NavigationService.setNavigator(navigatorRef)
        }}
      />
    </Provider>
  )
}

export default App;
