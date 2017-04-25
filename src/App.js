/**
 * Copyright(c) omk 2016
 * Filename:
 * Author  : alixez
 */
import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import platformVariables from '../native-base-theme/variables/platform';
import AppNavigator from './components/AppNavigator';
import configureStore from './ConfigureStore';


export default class App extends Component {
  store = configureStore();

  constructor() {
    super();
  }

  render() {
    return (
      <StyleProvider style={getTheme(platformVariables)}>
        <Provider store={this.store}>
            <AppNavigator />
        </Provider>
      </StyleProvider>
    )
  }
}