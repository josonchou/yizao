/**
 * Copyright(c) omk 2016
 * Filename:
 * Author  : alixez
 */
import { AppStackNavigator } from '../components/AppNavigator';
import { NavigationActions } from 'react-navigation';
import { ROUTE } from '../actions/Auth';

const initialNavigatorState = {
  index: 0,
  routes: [
    {key: 'InitA', routeName: 'Main'},
  ],
};

export default function(state = initialNavigatorState, action) {

  switch (action.type) {
    case ROUTE.LOGIN:
      return AppStackNavigator.router.getStateForAction(NavigationActions.back(), state);
    case ROUTE.LOGOUT:
      return AppStackNavigator.router.getStateForAction(NavigationActions.navigate({routeName: 'Login'}), state);
    default:
      return AppStackNavigator.router.getStateForAction(action, state);
  }
}