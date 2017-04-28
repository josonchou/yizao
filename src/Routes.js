/**
 * Copyright(c) omk 2016
 * Filename:
 * Author  : alixez
 */
import { Platform } from 'react-native';
import LoginScreen from './components/auth/LoginScreen';
import MainScreen from './components/MainScreen';
import OrderManagerScreen from './components/order/OrderManagerScreen';
import AddressManagerScreen from './components/address/AddressManagerScreen';

import CustomPack from './components/home/CustomPack';
import WeekPack from './components/home/WeekPack';

export default {
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  OrderManager: { screen: OrderManagerScreen },
  AddressManager: { screen: AddressManagerScreen }
}

//   Login: {screen: LoginScreen},
//   Home: {screen: HomeScreen},
// }

export const options = {
  initialRouteName: 'Main',
  headerMode: 'none',
  mode: Platform.os === 'ios' ? 'modal' : 'card',
};

export const SegmentTab = {
  Custom: {
    screen: CustomPack,
  },
  Pack: {
    screen: WeekPack,
  }
};

export const SegmentTabOptions = {
  initialRouteName: 'Custom',
};