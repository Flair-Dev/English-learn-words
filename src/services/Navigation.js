/**
 * @format
 * @flow
 */

import {NavigationActions} from 'react-navigation';

let navigator;
let horizontalNavigator;

function setNavigator(navigatorRef: any) {
  navigator = navigatorRef;
}

function navigate(routeName: string, params: ?Object) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function goBack(key: ?string = null) {
  navigator.dispatch(NavigationActions.back({key}));
}

function setHorizontalNavigator(navigatorRef: any) {
  horizontalNavigator = navigatorRef;
}

function scrollToIndex(index: number) {
  horizontalNavigator.scrollToIndex({index, animated: true});
}

let setEnableScroll;

function initSetEnableScroll(func: Function) {
  setEnableScroll = func;
}

function enableScroll() {
  if (!setEnableScroll) {
    return;
  }
  setEnableScroll(true);
}

function disableScroll() {
  if (!setEnableScroll) {
    return;
  }
  setEnableScroll(false);
}

export default {
  navigate,
  goBack,
  setNavigator,
  setHorizontalNavigator,
  scrollToIndex,
  initSetEnableScroll,
  enableScroll,
  disableScroll,
};
