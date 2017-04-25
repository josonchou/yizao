/**
 * Copyright(c) omk 2016
 * Filename:
 * Author  : alixez
 */
import { combineReducers } from 'redux';

import auth from './Auth';
import nav from './Navigator';
import drawer from './Drawer';

export default combineReducers({
  auth,
  nav,
  drawer,
});